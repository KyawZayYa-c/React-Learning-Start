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

    const deleteItem = (text)=>{
        console.log('Delete items ',text);
        setItems(items.filter(item => item !== text))
    }

    const updateItem = (text)=>{
        console.log('Update items ',text);
        setItems(items.map(item => item === text ? `${text} updated` : item));
    }

    return(
        <div>
            <button type={'button'} onClick={() => addItem()}>Add item</button>
            <ul>
            {

                items.map((item, index) => (
                    <li key={index}>{item}
                        <button type={"button"} onClick={() => deleteItem(item)} >Delete</button>
                        <button type={"button"} onClick={() => updateItem(item)} >Update</button>
                    </li>

                ))

            } </ul>
        </div>
    )
}