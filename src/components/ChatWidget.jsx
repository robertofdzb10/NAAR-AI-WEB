import { useState } from "react";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente de NAAR, ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
        data?.reply || "Lo siento, ahora mismo no pude procesar esa pregunta.";

      setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
    } catch (err) {
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
        <button
          className="naar-chat-fab"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
        >
          <FiMessageSquare size={22} />
        </button>
      )}

      {/* Ventana abierta */}
      {open && (
        <div className="naar-chat-window">
          <div className="naar-chat-header">
            <span>Asistente NAAR</span>
            <button
              onClick={() => setOpen(false)}
              className="naar-icon-btn"
              aria-label="Cerrar chat"
            >
              <FiX size={18} />
            </button>
          </div>

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

            {loading && (
              <p className="naar-typing">Escribiendo...</p>
            )}
          </div>

          <form onSubmit={sendMessage} className="naar-chat-input">
            <input
              type="text"
              value={input}
              placeholder="Escribe tu mensaje..."
              aria-label="Tu mensaje"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="naar-icon-btn"
              aria-label="Enviar"
            >
              <FiSend size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
