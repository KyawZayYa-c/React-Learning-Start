'use client';

import useAuth from "./useAuth";

function Page1(){
    const Auth = useAuth();
    return(
    <div>
        {Auth &&  "Page 1"}
        {!Auth &&  "Access Denied"}
    </div>
    )

}

function Page2(){
    const Auth = useAuth();
    return(
        <div>
            {Auth &&  "Page 2"}
            {!Auth &&  "Access Denied"}
        </div>
    )

}

export default function WhyHocAuth() {
    return(
        <div>
            <Page1 />
            <Page2 />

        </div>
    )
}