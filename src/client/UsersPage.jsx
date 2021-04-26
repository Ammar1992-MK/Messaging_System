import React from "react";
import {useLoading} from "./UseLoading";
import {ErrorView} from "./ErrorView";
import {LoadingView} from "./LoadingView";

export const UsersPage = ({systemApi}) => {
    const { loading, error, data : users } = useLoading( async() =>
        await systemApi.getUsers()
    )

    if(error){
        return <ErrorView error={error}/>
    }
    if(loading || !users){
        return <LoadingView/>
    }


    return (

        <div className={"users-container"}>
            {users.map((user , index) =>
            <ul>
                <li key={index}>
                    <div>{user.username} {user.isAdmin && <strong>ADMIN</strong>}</div>
                    <div>{user.email}</div>
                </li>
            </ul>
            )}
        </div>
    )


}