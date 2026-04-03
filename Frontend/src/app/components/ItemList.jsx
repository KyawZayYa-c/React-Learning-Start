export  function ReturnNothing(){
    return null;
}

export default function ItemList(){
    let items = ['Apple', 'Orange', 'Banana'];

    return (
        <div>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
            {
                ReturnNothing()+''
            }
        </div>
    )
}