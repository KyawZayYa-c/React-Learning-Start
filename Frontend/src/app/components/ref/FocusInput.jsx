'use client';

import {useRef} from "react";

export default function FocusInput() {
    const inputRef = useRef();
    const onClickHandler = () => {
        console.log('Focus ', inputRef.current);
        inputRef.current.focus();
    }
    return (<div>
        <input ref={inputRef} type={"text"} />
        <button type={"button"} onClick={onClickHandler}>Focus</button>
    </div>)
}

