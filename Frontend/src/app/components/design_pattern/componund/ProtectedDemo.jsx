'use client';

import Protected from "./Protected";

function Page1() {
    return (
        <div>
            Page 1
        </div>
    )
}

export default function ProtectedDemo() {
    return (
        <div>
            <Protected>
                <Page1 />
            </Protected>

        </div>
    )
}