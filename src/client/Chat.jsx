import React,{useState} from 'react';
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";

export const Chat = ({systemApi}) => {
    const[message, setMessage] = useState("");
    const { loading, error, data : chatLog } = useLoading(async () =>
        await systemApi.retrieveMessage()
    )

    if(error){
        return <ErrorView error={error}/>
    }
    if(loading || !chatLog){
        return <LoadingView/>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        systemApi.postMessage({message})
        console.log("submitted")
    }

    return (
        <div className={"chat-container"}>
            <header className={"chat-header"}>
                <h1>Chat</h1>
            </header>
            <main className={"chat-main"}>
                <div className={"chat-log"}>
                    {chatLog.map((chat, index) => (
                        <div key={index}>{chat.sender} : {chat.message}</div>
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