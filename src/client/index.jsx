import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import {LoginPage} from "./LoginPage";
import {ProfilePage} from "./ProfilePage";
import {UsersPage} from "./UsersPage";
import {API} from "./API";
import {AdminPage} from "./AdminPage";
import {Chat} from "./Chat";
import {Message} from "./Message";

const Application = () => {

    const systemApi = API();

    return(
        <BrowserRouter>
            <nav className={"nav-container"}>
                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/users"}>List users</Link></div>
            </nav>
            <main className={"main-container"}>
                <Switch>
                    <Route exact path={"/users"}>
                        <UsersPage systemApi={systemApi}/>
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
                    <Route path={"/admin"}>
                        <AdminPage/>
                    </Route>
                    <Route path={"/message"}>
                        <Message systemApi={systemApi}/>
                    </Route>
                    <Route path={"/"}>
                        <h1>Messaging Application</h1>
                        <ul>
                            <li>
                                <Link to={"/profile"}>Profile</Link>
                            </li>
                        </ul>
                        <LoginPage systemApi={systemApi}/>
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