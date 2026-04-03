'use client';

function Child1(){
    const handler = (event) => {
        console.log('Child1 handler');
        event.stopPropagation();
    }

    return(<div onClick={handler} >
        <h3>Child 1</h3>
    </div>)
}

export default function PropagationDemo(){
    const preventHandler = ()=>{
        console.log('prevent handler');
    };

    const rightClickHandler = (event) => {
        console.log('rightClick handler');
        event.preventDefault();

    }
    return(
        <div onClick={preventHandler} onContextMenu={rightClickHandler}>
          <h3>Parent</h3>
            <Child1 />
        </div>
    )
}