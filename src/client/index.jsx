import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

const Application = () => {

    return(
        <BrowserRouter>
            <nav>
                <Link to={"/"}>Home</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path={"/users"}>
                        <h1>users</h1>
                    </Route>
                    <Route  path={"/login"}>
                        <h1>log in page</h1>
                    </Route>
                    <Route path={"/profile"}>
                        <h1>profile</h1>
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
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>

    )
}
ReactDOM.render(<Application/>, document.getElementById("root"));