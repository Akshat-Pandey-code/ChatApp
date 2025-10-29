import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import EmojiPicker from "emoji-picker-react";
import { FaSmile } from "react-icons/fa";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  // ✅ Send message
  const send = () => {
    if (!text.trim()) return; // ignore empty
    const user = user_list[Math.floor(Math.random() * user_list.length)];
    const msg = { id: Date.now(), user, text: text.trim(), likes: 0 };
    setMessages((prev) => [...prev, msg]);
    setText("");
    inputRef.current?.focus();
    setShowEmojiPicker(false);
  };

  // ✅ Like a message
  const handleLike = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, likes: m.likes + 1 } : m))
    );
  };

  // ✅ Auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [messages]);

  // ✅ Input handler
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // ✅ Add emoji to message
  const handleEmojiClick = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="chat-shell">
      <div className="chat-header">
        <div className="header-title">Chat-App</div>
      </div>

      {/* Chat messages */}
      <div className="messages-area" ref={boxRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} message={m} onLike={() => handleLike(m.id)} />
        ))}
      </div>

      {/* Input area */}
      <div className="input-row">
        {/* Emoji picker box */}
        {showEmojiPicker && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* Emoji toggle button */}
        <button
          className="emoji-btn"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <FaSmile size={22} color="#007bff" />
        </button>

        {/* Text input */}
        <input
          ref={inputRef}
          className="msg-input"
          placeholder="Type Message"
          value={text}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        {/* Send button */}
        <button className="send-btn" onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
}
