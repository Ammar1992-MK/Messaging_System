import React, { useState } from "react";
import { InputField } from "./InputField";
import { Chat } from "./Chat";
import { Link } from "react-router-dom";

export const AdminPage = ({systemApi}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
     systemApi.addUser({name, email, description});
    console.log("submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add new user</h1>
        <InputField label={"name"} value={name} onChangeValue={setName} />
        <InputField label={"email"} value={email} onChangeValue={setEmail} />
        <InputField
          label={"description"}
          value={description}
          onChangeValue={setDescription}
        />
        <button className={"btn"}>Submit</button>
      </form>
      <Link to={"/message"}>
        <div>inbox</div>
      </Link>
      <Chat username={"Admin"} />
    </div>
  );
};
