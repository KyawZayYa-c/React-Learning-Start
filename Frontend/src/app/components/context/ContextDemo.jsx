'use client';

import {useContext, useState} from "react";
import {ThemeContext} from "./ThemeContext";

function Child(){
    const theme = useContext(ThemeContext);
    return <div style={{ color: theme.color }} >
        Child
    </div>;
}

function Parent() {
    return <div>
        Parent
        <Child  />
    </div>;
}

function GrandParent() {
    return <div>
        GrandParent
        <Parent  />
    </div>;
}

export default function ContextDemo() {
    const [theme , setTheme] = useState({
        color: "yellow",
    })

    const changeTheme = () => {
        setTheme({
            color: "blue",
        });
    }
    return(
        <div>
            <ThemeContext.Provider value={ theme } >
                <GrandParent />
                <button onClick={ changeTheme }>Change Theme</button>
            </ThemeContext.Provider>

        </div>
    )
}