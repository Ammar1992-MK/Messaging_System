import React from 'react'
import ReactDOM from 'react-dom'
import {UsersPage} from "../src/client/UsersPage";
import {act} from "react-dom/test-utils";

describe("user list page", () => {
    it("show users on dom", async () => {
        const systemApi = {
            getUsers : () => [{ id : 1, username : "fafafoo" , email : "test@email.com" }],
        };


        const container = document.createElement("div");
        document.body.appendChild(container);
        await act( async () => {
            ReactDOM.render(
                <UsersPage systemApi={systemApi}/>
                ,container
            )
        });

        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("li").textContent).toEqual(
            "fafafoo : test@email.com "
        )
    })
})