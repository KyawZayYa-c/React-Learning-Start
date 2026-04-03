'use client';

import {useState} from "react";
import TimerDemo from "./TimerDemo";

export default function CleanUpDemo() {
    const [showB , setShowB] = useState(true);
    return(<div>
        {showB && <TimerDemo />}
        <label >
            <input
                type="checkbox"
                checked={showB}
                onChange={e => setShowB(e.target.checked)}
                />
            Render the Timer
        </label>
    </div>)
}