import React from "react";
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";

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
    return <div className={"profile-container"}>
        <h1>Profile</h1>
        <img src={""}/>
        <div>username: {user.username} </div>
        <div>email: </div>
    </div>;
}