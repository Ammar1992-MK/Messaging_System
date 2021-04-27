import React,{useState} from 'react';
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";

export const Message = ({systemApi}) => {
    const [message, setMessage] = useState("");
    const {loading, error, data: messageLog} = useLoading(async() =>
        await systemApi.retrieveMessage()
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        systemApi.postMessage({message})
        console.log("submitted");
        setMessage("");
    }

    if(error){
        return <ErrorView error={error}/>
    }
    if(loading || !messageLog){
        return <LoadingView/>
    }

     return (
        <div className={"chat-container"}>
            <header className={"chat-header"}>
                <h1>Inbox</h1>
            </header>
            <main className={"chat-main"}>
                <div className={"chat-log"}>
                    {messageLog.map((message, index) => (
                        <div key={index}>{message.message}</div>
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