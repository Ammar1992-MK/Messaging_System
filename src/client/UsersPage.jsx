import React from "react";
import { useLoading } from "./UseLoading";
import { ErrorView } from "./ErrorView";
import { LoadingView } from "./LoadingView";

export const UsersPage = ({ systemApi }) => {
  const { loading, error, data: users } = useLoading(
    async () => await systemApi.getUsers()
  );

  if (error) {
    return <ErrorView error={error} />;
  }
  if (loading || !users) {
    return <LoadingView />;
  }

  return (
    <div className={"users-container"}>
      {users.map((user) => (
        <ul>
          <li key={user.id}>
             {user.username} : {user.email} {user.isAdmin && <strong>ADMIN</strong>}
          </li>
        </ul>
      ))}
    </div>
  );
};
