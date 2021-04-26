import React,{useState} from "react";
import {InputField} from "./InputField";

export const AdminPage = ({systemApi}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
         fetch("/api/createUser" , {
            method : "POST",
            body : JSON.stringify({name, email, description}),
            headers : {
                "Content-Type" : "application/json"
            }
        });
        console.log("submitted");
    }


    return (
           <form onSubmit={handleSubmit}>
               <h1>Add new user</h1>
               <InputField label={"name"} value={name} onChangeValue={setName}/>
               <InputField label={"email"} value={email} onChangeValue={setEmail}/>
               <InputField label={"description"} value={description} onChangeValue={setDescription}/>
               <button className={"btn"}>Submit</button>
           </form>
    );
}