import React,{useState,useEffect} from 'react';
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";

export const Chat = ({username}) => {
    const[message, setMessage] = useState("");
    const[chatLog, setChatLog] = useState([]);
    const[ws, setWs] = useState();

    useEffect(() => {
        const ws = new WebSocket("ws://" + window.location.host);
        ws.onopen = (event) => {
            console.log("opened", event);
        }

        ws.onmessage = (event) => {
            console.log("from server",  event)
            setChatLog((chatLog) =>[...chatLog, event.data]);
        }
        ws.onclose = (event) => {
            console.log("closed", event);
        }
        setWs(ws);
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        ws.send(message);
        setMessage("");
    }


    return (
        <div className={"chat-container"}>
            <header className={"chat-header"}>
                <h1>Chat</h1>
            </header>
            <main className={"chat-main"}>
                <div className={"chat-log"}>
                    {chatLog.map((message, index) => (
                        <div key={index}>{`from ${username} : `}{message}</div>
                    ))}
                </div>
            </main>
            <footer className={"chat-footer"}>
                <form className={"chat-form"} onSubmit={handleSubmit}>
                    <input type={"text"} autoFocus={true} value={message} onChange={e => setMessage(e.target.value)}/>
                    <button>submit</button>
                </form>
            </footer>
        </div>
    )
}