import React from 'react'
import ReactDOM from 'react-dom'
import {act} from "react-dom/test-utils";
import {ProfilePage} from "../src/client/ProfilePage";
import {MemoryRouter} from "react-router";

const systemApi = {
    getProfile: async () => (
        { id : 1, username : "logged in user" , email : "test@email.com" }
    )
};

describe("profile page", () => {
    it("show logged in users data  on dom", async () => {

        const container = document.createElement("div");
        document.body.appendChild(container);
        await act( async () => {
            ReactDOM.render(
                <MemoryRouter>
                <ProfilePage systemApi={systemApi}/>
                </MemoryRouter>
                ,container
            )
        });

        expect(container.innerHTML).toMatchSnapshot();
        expect(container.querySelector("p").textContent).toEqual(
            "username: logged in user "
        )
    })
})