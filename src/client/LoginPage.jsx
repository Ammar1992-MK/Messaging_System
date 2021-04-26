import React from "react";
import {Link} from "react-router-dom";

export const LoginPage = () => {


    return <div>
        <h3>Log in as admin user</h3>
        <form>
            <div>
                <label>
                    username
                    <input type={"text"}/>
                </label>
            </div>
            <div>
                <label>
                    password
                    <input type={"password"}/>
                </label>
            </div>
            <Link to={"/api/admin"}><button type={"submit"}>Log in</button></Link>
        </form>
        <h3>Not an admin!, log in with Google</h3>
        <a href={"/api/login"} target={"_self"}>Log in with google</a>
    </div>;
}