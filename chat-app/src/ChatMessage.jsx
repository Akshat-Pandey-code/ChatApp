import React from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function ChatMessage({ message, onLike }) {
  const initials = message.user
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0,2)
    .toUpperCase();

  return (
    <div className="chat-message-row">
      <div className="left-col">
        <div className="avatar">{initials}</div>
      </div>

      <div className="middle-col">
        <div className="msg-meta">
          <span className="msg-user">{message.user}</span>
        </div>

        <div className="msg-bubble">
          {message.text}
        </div>
      </div>

      <div className="right-col">
        <button className="thumb-btn" onClick={onLike} >
          <FaThumbsUp />
          <span className="thumb-count">{message.likes}</span>
        </button>
      </div>
    </div>
  );
}

