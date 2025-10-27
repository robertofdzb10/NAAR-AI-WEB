import { useState, useEffect } from "react";
import { FiMessageSquare, FiSend, FiX, FiMaximize2, FiMinimize2 } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); // ⬅️ pequeño por defecto
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente de NAAR, ¿en qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Detectar footer visible ---
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
      const replyText = data?.reply || "Lo siento, ahora mismo no pude procesar esa pregunta.";
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
      {/* Botón flotante cerrado */}
      {!open && (
        <button className="naar-chat-fab" onClick={() => setOpen(true)} aria-label="Abrir chat">
          <FiMessageSquare size={22} />
        </button>
      )}

      {/* Ventana de chat */}
      {open && (
        <div className={`naar-chat-window ${expanded ? "expanded" : ""}`}>
          <div className="naar-chat-header">
            <span>Asistente NAAR</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {/* 🔼 Mostrar botón de ampliar cuando está reducido */}
              {!expanded && (
                <button
                  onClick={() => setExpanded(true)}
                  className="naar-expand-btn"
                  aria-label="Ampliar ventana"
                >
                  <FiMaximize2 size={16} />
                </button>
              )}

              {/* 🔽 Mostrar botón de reducir cuando está expandido */}
              {expanded && (
                <button
                  onClick={() => setExpanded(false)}
                  className="naar-expand-btn"
                  aria-label="Reducir ventana"
                >
                  <FiMinimize2 size={16} />
                </button>
              )}

              {/* Botón de cerrar */}
              <button
                onClick={() => {
                  setOpen(false);
                  setExpanded(false); // ✅ vuelve a pequeño al cerrar
                }}
                className="naar-icon-btn"
                aria-label="Cerrar chat"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          <div className="naar-chat-body">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`naar-msg ${m.from === "user" ? "naar-right" : "naar-left"}`}
              >
                <div
                  className={`naar-bubble ${
                    m.from === "user" ? "naar-bubble-user" : "naar-bubble-bot"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <p className="naar-typing">Escribiendo...</p>}
          </div>

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
