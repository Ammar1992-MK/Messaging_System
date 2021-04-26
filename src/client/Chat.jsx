import React from 'react';

export const Chat = () => {

    return (
        <div className={"chat-container"}>
            <header className={"chat-header"}>
                <h1>Chat</h1>
            </header>
            <main className={"chat-main"}>
                <div className={"chat-log"}>
                    <div>Hello</div>
                </div>
            </main>
            <footer className={"chat-footer"}>
                <form className={"chat-form"}>
                    <input type={"text"} autoFocus={true}/>
                    <button>submit</button>
                </form>
            </footer>
        </div>
    )
}