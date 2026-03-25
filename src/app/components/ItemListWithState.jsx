'use client';

import {useState} from "react";
let id = 3;

export default function ItemListWithState(){
    const [items, setItems] = useState(['apple','Orange', 'banana']);

    const addItem = () => {

        let itemName = 'Item' + id;
        id++;
        // items.push(itemName);
        setItems([...items, itemName]);
        console.log('Add items ',items);
    }

    return(
        <div>
            <button type={'button'} onClick={() => addItem()}>Add item</button>
            <ul>
            {

                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))

            } </ul>
        </div>
    )
}