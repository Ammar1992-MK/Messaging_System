import React from "react";
import { useLoading } from "./UseLoading";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";
import { Chat } from "./Chat";
import { Link } from "react-router-dom";

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
          <Link to={"/message"}>
            <div>inbox</div>
          </Link>
        </header>
        <div>
          <a href={"/api/logout"} target={"_self"}>
            {" "}
            Log out
          </a>
        </div>
        <img src={user.profilePicture} />
        <p>username: {user.username} </p>
        <div>email: {user.email} </div>
      </div>
      <Chat username={user.username} />
    </div>
  );
};
