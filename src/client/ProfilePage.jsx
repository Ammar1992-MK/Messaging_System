import React,{useState, useEffect} from "react";
import {LoadingView} from "./LoadingView";

export const ProfilePage = ({systemApi}) => {
    const [user, setUser] = useState();
    const [error, setError] = useState(false);

    const getProfile = async () => {
        const fetchedProfile = await systemApi.getProfile();

        if (fetchedProfile === 401) {
            setError(true);
        } else {
            setUser(fetchedProfile);
        }
    }

    useEffect(getProfile, []);

    if (!user && !error) {
        return <LoadingView/>
    }
    if (error) {
        return (
            <h2>
                You are not logged in
                <a href={"/api/login"}>
                    <div>Log in</div>
                </a>
            </h2>
        );
    }

    return (
        <div className={"profile-container"}>
            <h1>Profile</h1>
            <img src={""}/>
            <div>username: {user.username} </div>
            <div>email:</div>
        </div>
    )
}