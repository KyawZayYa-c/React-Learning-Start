import './border.css';
export default function Bordered({children}){
    return(<div className={"border"} >
        {children}
    </div>)
}