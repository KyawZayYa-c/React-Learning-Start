'use client';

import {useState} from "react";
import useFormInput from "./useFormInput";

export default function FormWithHook(){
    const inputUsername = useFormInput("");
    const inputPassword = useFormInput("");

    const handleLogin = () => {
        console.log('User name is ', inputUsername.value, ' pasword ', inputPassword.value);
        // setUsername('');
        // setPassword('');
    }

    return(
        <div>
            <div>
                <label>Username</label>
                <input {...inputUsername} />
            </div>
            <div>
                <label>Password</label>
                <input {...inputPassword} />
            </div>
            <button type={"button"} onClick={handleLogin}>Submit</button>
            <div> username : {inputUsername.value}  pasword  { inputPassword.value}</div>
        </div>
    )
}