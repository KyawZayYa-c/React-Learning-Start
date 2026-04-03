import useAuth from "../hoc/useAuth";

export default function Protected({children}){
    const auth = useAuth();
    if(auth){
        return (<>
            {children}
        </>)
    }else {
        return (
            <div>
                <h1>Access denied</h1>
            </div>
        )
    }
}