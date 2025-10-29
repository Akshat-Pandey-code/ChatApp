import React from "react";
import { FaThumbsUp } from "react-icons/fa";

/*
  ChatMessage receives:
    message = { id, user, text, likes }
    onLike = function to call when thumbs up clicked
*/
export default function ChatMessage({ message, onLike }) {
  // initials from username (works if single name too)
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
