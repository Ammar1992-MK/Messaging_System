import React from "react";

export function ErrorView({ error }) {
  return (
    <>
      <div>Something went wrong: {error.toString()}</div>
      <a href={"/api/login"}>
        <button>Log in</button>
      </a>
    </>
  );
}
