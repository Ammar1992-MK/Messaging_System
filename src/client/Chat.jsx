import React, {useEffect, useState} from "react";
import {ChatView} from "./ChatView";

export const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [ws, setWs] = useState();

  useEffect(() => {
    const ws = new WebSocket("ws://" + window.location.host);
    ws.onopen = (event) => {};

    ws.onmessage = (event) => {
      setChatLog((chatLog) => [...chatLog, event.data]);
    };
    ws.onclose = (event) => {};
    setWs(ws);
  }, []);



  return (
    <ChatView chatLog={chatLog} sendMessage={(message) => ws.send(message)}/>
  );
};
