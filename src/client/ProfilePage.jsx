import React from "react";
import { useLoading } from "./UseLoading";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";
import { Chat } from "./Chat";
import { Link } from "react-router-dom";
import {Message} from "./Message";

export const ProfilePage = ({ systemApi }) => {
  const { loading, error, data: user } = useLoading(
    async () => await systemApi.getProfile()
  );

  if (error) {
    return <ErrorView error={error} />;
  }
  if (loading || !user) {
    return <LoadingView />;
  }


  return (
    <div className={"profile-chat-container"}>
      <div className={"profile-container"}>
        <header>
          <div>
            <h1>Profile</h1>
          </div>
        </header>
        <div>
          <a href={"/api/logout"} target={"_self"}>
            {" "}
            Log out
          </a>
        </div>
        <img src={user.profilePicture} />
        <div>Hi {user.username} here you can send an inbox message to other users</div>
        <p>username: {user.username} </p>
        <div>email: {user.email} </div>
        <div>
          <Link to={"/chat"}>Go to Live Chat</Link>
        </div>
      </div>
      <div className={"inbox-container"}>
        <Message systemApi={systemApi}/>
      </div>

    </div>
  );
};
