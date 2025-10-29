import React from "react";
import ChatBox from "./ChatBox";

export default function App() {
  return (
    <div className="page-bg">
      <div className="center-wrap">
        {/* Only main chat area (no sidebar) */}
        <ChatBox />
      </div>
    </div>
  );
}
