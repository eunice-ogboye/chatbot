import React from "react";
import { useParams } from "react-router-dom";

function Chat() {
    const { username } = useParams();

    // Fetch additional user information based on username if needed
  
    return (
      <div>
        <h1>Chat with User {username}</h1>
        {/* Add chat UI and functionality here */}
      </div>
    );
  }

export default Chat;
