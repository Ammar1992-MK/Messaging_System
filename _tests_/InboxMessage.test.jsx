import React from 'react'
import ReactDOM from 'react-dom'
import {act} from "react-dom/test-utils";
import {Message} from "../src/client/Message";

const systemApi = {
    retrieveMessage: async () => [{ id : 1, message : "fooooooo"}]
};

describe("inbox message", () => {
    it("show sent and received message", async () => {

        const container = document.createElement("div");
        document.body.appendChild(container);
        await act( async () => {
            ReactDOM.render(
                    <Message systemApi={systemApi}/>
                ,container
            )
        });

        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("p").textContent).toEqual(
            "fooooooo"
        )
    })
})