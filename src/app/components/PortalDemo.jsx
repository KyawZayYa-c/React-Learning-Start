'use client';

import {createPortal} from "react-dom";

function ModalDialog(){
    return (
        <div>
            Modle Dialog
        </div>
    )
}

export default function PortalDemo() {
    return (
        <div>
            <h1>Portal Demo</h1>
            {
                createPortal(<ModalDialog />, document.body)
            }

        </div>
    )
}