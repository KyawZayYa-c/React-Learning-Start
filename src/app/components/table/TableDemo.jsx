'use client';
import './table.css';

import Table, {TableBody, TableCell, TableHead, TableRow} from "@/app/components/table/Table";

const initialItem = [
    {
        id : '1',
        title: 'Task 1',
        completed: false,
    },{
        id : '2',
        title: 'Task 2',
        completed: true,
    },{
        id : '3',
        title: 'Task 3',
        completed: false,
    }
];

export default function TableDemo() {
    return (
        <div style={{background : 'white', padding: '1rem'}} >
            <Table style={{width: '450px',
                color: 'black'}}>
                <TableHead>
                    <TableRow>
                        <TableCell component={'th'} >
                            Id
                        </TableCell>
                        <TableCell component={'th'} >
                            Titile
                        </TableCell>
                        <TableCell component={'th'}>
                            Complete
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        initialItem.map((item, index) => (
                            <TableRow key={index} >
                                <TableCell>
                                    {item.id}
                                </TableCell>
                                <TableCell>
                                    {item.title}
                                </TableCell>

                                <TableCell>
                                    {item.completed.toString()}
                                </TableCell>
                            </TableRow>

                        ))
                    }



                </TableBody>
            </Table>
        </div>
    )
}