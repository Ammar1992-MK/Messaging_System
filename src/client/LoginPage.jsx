import React,{useState} from "react";
import {useHistory} from "react-router";

export const LoginPage = ({systemApi}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit =  (e) => {
        e.preventDefault()
        if(username === "examiner" && password === "kristiania2021"){
            history.push("/admin")
        } else {
            alert("wrong username or password");
        }
    }


    return <div>
        <h3>Log in as admin user</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    username
                    <input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    password
                    <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
            </div>
            <button type={"submit"}>Log in</button>
        </form>
        <h3>Not an admin!, log in with Google</h3>
        <a href={"/api/login"} target={"_self"}>Log in with google</a>
    </div>;
}