import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { ProfilePage } from "./ProfilePage";
import { UsersPage } from "./UsersPage";
import { API } from "./API";
import { AdminPage } from "./AdminPage";
import { Message } from "./Message";
import {Chat} from "./Chat";

const Application = () => {
  const systemApi = API();


  return (
    <BrowserRouter>
      <nav className={"nav-container"}>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/users"}>List users</Link>
        </div>
        <div>
          <Link to={"/profile"}>Profile</Link>
        </div>
      </nav>
      <main className={"main-container"}>
        <Switch>
          <Route exact path={"/users"}>
            <UsersPage systemApi={systemApi} />
          </Route>
          <Route path={"/profile"}>
            <ProfilePage systemApi={systemApi} />
          </Route>
          <Route path={"/admin"}>
            <AdminPage systemApi={systemApi}/>
          </Route>
          <Route path={"/message"}>
            <Message systemApi={systemApi} />
          </Route>
          <Route path={"/chat"}>
            <Chat/>
          </Route>
          <Route path={"/"}>
            <LoginPage systemApi={systemApi} />
          </Route>
          <Route>
            <h1>Not found</h1>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
ReactDOM.render(<Application />, document.getElementById("root"));
