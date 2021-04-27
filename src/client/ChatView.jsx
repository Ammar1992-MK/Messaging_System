import React, {useState} from "react";

export function ChatView({sendMessage, chatLog}) {

    const [message, setMessage] = useState("");

    const handleSubmitChatMessage = (e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
    };

    return <div className={"chat-main-container"}>
        <header className={"chat-header"}>
            <h1>Chat</h1>
        </header>

        <main className={"chat-main"}>
            <div className={"chat-log"}>
                {chatLog.map((message, index) => <div key={index}>{message}</div>)}
            </div>
        </main>
        <footer className={"chat-footer"}>
            <form className={"chat-form"} onSubmit={handleSubmitChatMessage}>
                <input
                    type={"text"}
                    autoFocus={true}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button>submit</button>
            </form>
        </footer>
    </div>;
}