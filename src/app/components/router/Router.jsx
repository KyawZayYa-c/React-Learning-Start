'use client';

import {useState} from "react";

export default function Router({routes}) {
    const [active, setActive] = useState(0);
    const routeClickHandler = (index) => {
        console.log('Routes Index Component : ', routes[index].component);
        setActive(index);
    }
    return (
        <div>
            Router demo
            <ol>
                {
                    routes.map((route, index) => <li key={index} onClick={() => routeClickHandler(index)} >
                        {route.label}
                    </li>)
                }
            </ol>
            <div>
                {
                    routes[active].component
                }
            </div>
        </div>
    )
}
