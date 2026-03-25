export function Admin(){
    return(<div>Admin</div>)
}

export function User(){
    return(<div>User</div>)
}

export default function Dashboard({role}){
    // if(role==='Admin'){
    //     return(
    //         <Admin />
    //     )
    // }else {
    //     return (
    //         <User />
    //     )
    // }

    // return(
    //     role === 'admin' ? <Admin /> : <User />
    // )

    let Component;
    if(role === 'admin'){
        Component = Admin;
    }else {
        Component = User;
    }

    return <Component />
}