'use client';

function CustomButton({clickHandler}){
    return(
        <button type = {"button"} onClick={clickHandler} >Click me</button>
    )
}
export default function EventDemo(){
    function clickHandler(){
        console.log("click handler");
    }
    return(
        <div>
            Event Demo
            <CustomButton clickHandler={clickHandler}/>
        </div>
    )
}