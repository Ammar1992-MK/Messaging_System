import React from 'react'
import ReactDOM from 'react-dom'
import {Simulate} from 'react-dom/test-utils'
import {ChatView} from "../src/client/ChatView";
describe("Chat View",() => {
    it("shows messages in the chat log", () => {
        const container = document.createElement("div");
        ReactDOM.render(<ChatView chatLog={["good morning :)", "do you thinks so ??"]}/>, container);
        expect(container).toMatchSnapshot();
        expect(container.querySelector(".chat-log div").textContent).toEqual("good morning :)");

    });

    it("send new message in chat", () => {
        const container = document.createElement("div");
        const sendMessage = jest.fn();
        ReactDOM.render(<ChatView chatLog={[]} sendMessage={sendMessage}/>, container);

        Simulate.change(container.querySelector("input"), {
            target : {value : "Hello chat"},
        });

        Simulate.submit(container.querySelector("form"));

        expect(sendMessage).toBeCalledWith("Hello chat")
    })
})