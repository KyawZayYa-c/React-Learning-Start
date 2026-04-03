'use client';

import {useState} from "react";

export default function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log('User name is ', username, ' pasword ', password);
        setUsername('');
        setPassword('');
    }

    return(
        <div>
            <div>
                <label>Username</label>
                <input value={username} type={"text"} onChange={handleUserNameChange} />
            </div>
            <div>
                <label>Password</label>
                <input value={password} type={"password"} onChange={handlePasswordChange} />
            </div>
            <button type={"button"} onClick={handleLogin}>Submit</button>
        </div>
    )
}