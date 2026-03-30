'use client';

import withAuth from "@/app/components/design_pattern/hoc/withAuth";

function Page1({name}){
    return (
        <div>
            {name} Page 1
        </div>
    )
}

function Page2(){
    return (
        <div>
            Page 1
        </div>
    )
}

const AuthPage1 = withAuth(Page1);

export default function AuthDemo() {
    return (
        <div>
            <AuthPage1 name={"auth"} />
            <Page2 />
        </div>
    )
}


