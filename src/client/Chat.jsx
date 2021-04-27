import React, { useState, useEffect } from "react";
import { useLoading } from "./UseLoading";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";

export const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [ws, setWs] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://" + window.location.host);
    ws.onopen = (event) => {};

    ws.onmessage = (event) => {
      setChatLog((chatLog) => [...chatLog, event.data]);
      setCounter((counter) => counter + 1);
    };
    ws.onclose = (event) => {};
    setWs(ws);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    ws.send(message);
    setMessage("");
  };

  return (
    <div className={"chat-container"}>
      <header className={"chat-header"}>
        <h1>Chat</h1>
        <p>{counter}</p>
      </header>

      <main className={"chat-main"}>
        <div className={"chat-log"}>
          {chatLog.map((message, index) => (
            <div key={index}>
              {`from ${username} : `}
              {message}
            </div>
          ))}
        </div>
      </main>
      <footer className={"chat-footer"}>
        <form className={"chat-form"} onSubmit={handleSubmit}>
          <input
            type={"text"}
            autoFocus={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>submit</button>
        </form>
      </footer>
    </div>
  );
};
