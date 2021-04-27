import React, { useState } from "react";
import { InputField } from "./InputField";
import { Chat } from "./Chat";
import { Link } from "react-router-dom";
import {Message} from "./Message";

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
    <div className={"admin-page-main-container"}>
      <div className={"add-user-form-container"}>
          <h3>Hi admin! here you can add new users and send message to all users</h3>
          <form className={"add-user-form"} onSubmit={handleSubmit}>
              <h1>Add new user</h1>
              <InputField label={"name"} value={name} onChangeValue={setName} />
              <InputField label={"email"} value={email} onChangeValue={setEmail} />
              <InputField
                  label={"description"}
                  value={description}
                  onChangeValue={setDescription}
              />
              <button className={"btn"}>Submit</button>
              <Link to={"/chat"}>Go to Live Chat</Link>
          </form>
      </div>
      <div className={"inbox-container"}>
          <Message systemApi={systemApi}/>
      </div>
    </div>
  );
};
