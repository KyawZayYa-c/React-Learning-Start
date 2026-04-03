'use client';
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Router from "./Router";

export default function RouterDemo(){
    const routes = [
        {
            path: '/home',
            label : 'Home',
            component: <HomePage />,
        },{
            path: '/dashboard',
            label : 'Dashboard',
            component: <Dashboard />,
        },
    ];


    return (
        <Router routes={routes} >

        </Router>
    )
}