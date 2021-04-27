import React from 'react'
import ReactDOM from 'react-dom'
import {ChatView} from "../src/client/ChatView";
describe("Chat View",() => {
    it("shows messages in the chat log", () => {
        const container = document.createElement("div");
        ReactDOM.render(<ChatView chatLog={["good morning :)", "do you thinks so ??"]}/>, container);
        expect(container).toMatchSnapshot();
        expect(container.querySelector(".chat-log div").textContent).toEqual("good morning :)");

    })
})