import React from "react";
import { useParams } from "react-router-dom";

function Chat() {
  const { username } = useParams();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary  py-4 vh-fit">
        <div className="bg-white p-3 rounded col-6">
          <h1>Chat with User {username}</h1>
          <div className="bg-light vh-100 p-3">
            <div className="p-3 m-2 bg-secondary text-white shadow-sm rounded-pill w-25 shadow-sm">
              Hello
            </div>
            <div className="p-3 m-2 bg-primary text-white shadow-sm rounded-pill w-25 float-end shadow-sm">
              hi
            </div>
          </div>
          <div className="input-group">
          <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
            <span className="input-group-text bg-primary text-white">Send</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
