'use client';
import './table.css'
export function TableHead({children}) {
    return <thead>
        {children}
    </thead>
}
export function TableRow({children}) {
    return <tr>
    {children}
    </tr>
}
export function TableBody({children}) {
    return <tbody>
        {children}
    </tbody>
}
export function TableCell({children, component, ...props}) {

    if(component == 'th') {
        return (
            <th {...props} >
                {children}
            </th>
        )
    }else{
        return  (
            < td {...props} >
                {children}
            </td>
        )
    }

}


export default function Table({children ,... props}) {
    return (
        <table className={"cus-table"} {...props}>
            {children}
        </table>
    )
}