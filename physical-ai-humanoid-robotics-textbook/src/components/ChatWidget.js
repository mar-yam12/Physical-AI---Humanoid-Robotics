import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chat.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const getTimestamp = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: getTimestamp(),
    };
    const currentInput = input;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      console.log("Sending message:", currentInput);

      const res = await axios.post(
        "https://web-production-20303.up.railway.app/chat",
        {
          message: currentInput,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Response received:", res);
      console.log("Response data:", res.data);

      const botReply =
        res.data.reply ||
        res.data.response ||
        res.data.message ||
        "No response from server";

      const botMessage = {
        sender: "bot",
        text: botReply,
        timestamp: getTimestamp(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error details:", err);
      console.error("Error response:", err.response);

      const errorMsg =
        err.response?.data?.error || err.message || "Unable to reach server";
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Error: ${errorMsg}`,
          timestamp: getTimestamp(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className={`chat-widget ${open ? "open" : ""}`}>
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Chat"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="header-info">
              <div className="avatar-bot">AI</div>
              <div>
                <strong>Assistant</strong>
                <div className="status-indicator">Online</div>
              </div>
            </div>
            <div className="header-actions">
              <button
                className="icon-btn"
                onClick={handleClearChat}
                title="Clear Chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
              <button
                className="icon-btn close-btn"
                onClick={() => setOpen(false)}
                title="Close"
              >
                ×
              </button>
            </div>
          </div>

          <div className="chat-body">
            {messages.length === 0 && (
              <div className="welcome-message">
                <p>👋 Hi! Ask me anything about Physical AI & Robotics.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`message-row ${m.sender}`}>
                {m.sender === "bot" && (
                  <div className="avatar-bot-small">AI</div>
                )}
                <div className="message-content">
                  <div className={`bubble ${m.sender}`}>{m.text}</div>
                  <div className="timestamp">{m.timestamp}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="message-row bot">
                <div className="avatar-bot-small">AI</div>
                <div className="bubble bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={loading}
              autoFocus
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send Message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
