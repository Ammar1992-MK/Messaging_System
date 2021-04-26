import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import {LoginPage} from "./LoginPage";
import {ProfilePage} from "./ProfilePage";
import {UsersPage} from "./UsersPage";

const Application = () => {
    const systemApi = {
        getProfile: async () => {
            const res = await fetch("/api/profile");
            if (!res.ok) {
                throw new Error(
                    `Something went wrong loading ${res.url}: ${res.statusText}`
                );
            }
            return res.json();
        },
        getUsers : async () => {
            const res = await fetch("api/users");
            if(!res.ok){
                throw new Error(
                    `Something went wrong loading ${res.url}: ${res.statusText}`
                );
            }
            return res.json();
        }
    }

    return(
        <BrowserRouter>
            <nav className={"nav-container"}>
                <Link to={"/"}>Home</Link>
            </nav>
            <main className={"main-container"}>
                <Switch>
                    <Route exact path={"/users"}>
                        <UsersPage systemApi={systemApi}/>
                    </Route>
                    <Route path={"/login"}>
                        <LoginPage/>
                    </Route>
                    <Route path={"/profile"}>
                        <ProfilePage systemApi={systemApi}/>
                    </Route>
                    <Route path={"/inbox"}>
                        <h1>inbox</h1>
                    </Route>
                    <Route path={"/add"}>
                        <h1>Add users</h1>
                    </Route>
                    <Route path={"/"}>
                        <h1>Messaging Application</h1>
                        <ul>
                            <li>
                                <Link to={"/users"}>List users</Link>
                            </li>
                            <li>
                                <Link to={"/profile"}>Profile</Link>
                            </li>
                            <li>
                                <Link to={"/inbox"}>Inbox</Link>
                            </li>
                            <li>
                                <Link to={"/add"}>add users</Link>
                            </li>
                        </ul>
                        <Link to={"/login"}>
                            <button className={"btn"}>Log in</button>
                        </Link>
                    </Route>
                    <Route>
                        <h1>Not found</h1>
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>

    )
}
ReactDOM.render(<Application/>, document.getElementById("root"));