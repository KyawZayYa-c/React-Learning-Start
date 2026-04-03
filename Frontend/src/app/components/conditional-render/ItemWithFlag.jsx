export default function ItemWithFlag({flag, name}){
    return(
        <div>
            {flag && 1}
            {name}
        </div>
    )
}