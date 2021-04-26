import React from "react";
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";
import {Chat} from "./Chat";

export const ProfilePage = ({systemApi}) => {
    const { loading, error, data : user } = useLoading(async () =>
        await systemApi.getProfile()
    );

    if(error){
        return <ErrorView error={error}/>
    }
    if(loading || !user){
        return <LoadingView/>
    }

    return (
        <div className={"profile-chat-container"}>
            <div className={"profile-container"}>
                <h1>Profile</h1>
                <div>
                    <a href={"/api/logout"} target={"_self"}>
                        {" "}
                        Log out
                    </a>
                </div>
                <img src={user.profilePicture}/>
                <div>username: {user.username} </div>
                <div>email: {user.email} </div>
            </div>
            <Chat systemApi={systemApi} username={user.username}/>
        </div>
    )

}