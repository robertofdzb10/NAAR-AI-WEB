import { useState, useEffect } from "react";
import {
  FiMessageSquare,
  FiSend,
  FiX,
  FiMaximize2,
  FiMinimize2,
} from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); // ventana pequeña por defecto
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "¡Hola! Soy el asistente de NAAR, ¿en qué puedo ayudarte?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Detectar si el footer está visible para subir el chat y que no lo tape ---
  useEffect(() => {
    const footerEl = document.querySelector("footer");
    if (!footerEl) return;
    let timer = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          document.body.classList.toggle("chat--lifted", visible);
        }, 100);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footerEl);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
      document.body.classList.remove("chat--lifted");
    };
  }, []);

  // --- Enviar mensaje ---
  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await res.json();
      const replyText =
        data?.reply ||
        "Lo siento, ahora mismo no pude procesar esa pregunta.";

      setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error al conectar con el servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Botón flotante cuando está cerrado */}
      {!open && (
        <button
          className="naar-chat-fab"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
        >
          <FiMessageSquare size={22} />
        </button>
      )}

      {/* Ventana del chat */}
      {open && (
        <div className={`naar-chat-window ${expanded ? "expanded" : ""}`}>
          {/* CABECERA */}
          <div className="naar-chat-header">
            <div className="naar-chat-header-left">
              <span
                className="naar-chat-status-dot"
                aria-hidden="true"
              ></span>

              <div className="naar-chat-header-text">
                <div className="naar-chat-header-line1">NAAR Assistant</div>
                <div className="naar-chat-header-line2">
                  Disponible ahora
                </div>
              </div>
            </div>

            <div className="naar-chat-header-right">
              {/* Botón ampliar/reducir tamaño */}
              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="naar-header-iconbtn"
                  aria-label="Ampliar ventana"
                >
                  <FiMaximize2 size={15} />
                </button>
              )}

              {expanded && (
                <button
                  onClick={() => setExpanded(false)}
                  className="naar-header-iconbtn"
                  aria-label="Reducir ventana"
                >
                  <FiMinimize2 size={15} />
                </button>
              )}

              {/* Botón cerrar */}
              <button
                onClick={() => {
                  setOpen(false);
                  setExpanded(false); // reset al cerrar
                }}
                className="naar-header-iconbtn"
                aria-label="Cerrar chat"
              >
                <FiX size={16} />
              </button>
            </div>
          </div>

          {/* Mensajes */}
          <div className="naar-chat-body">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`naar-msg ${
                  m.from === "user" ? "naar-right" : "naar-left"
                }`}
              >
                <div
                  className={`naar-bubble ${
                    m.from === "user"
                      ? "naar-bubble-user"
                      : "naar-bubble-bot"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && <p className="naar-typing">Escribiendo...</p>}
          </div>

          {/* Zona de input */}
          <form onSubmit={sendMessage} className="naar-chat-input">
            <input
              type="text"
              value={input}
              placeholder="Escribe tu mensaje..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="naar-icon-btn"
              aria-label="Enviar mensaje"
            >
              <FiSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
