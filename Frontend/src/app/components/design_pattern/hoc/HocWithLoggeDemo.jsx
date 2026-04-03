'use client';
import withLogger from "./withLogger";

function Component1(){
    return (
        <div>
            Component1
        </div>
    )
}

function Component2(){
    return (
        <div>
            Component2
        </div>
    )
}

const Componet1WithLogger = withLogger(Component1);
const Componet2WithLogger = withLogger(Component2);

export default function HocWithLoggeDemo() {
    return (
        <div>
            <Componet1WithLogger />
            <Componet2WithLogger />
        </div>
    )
}