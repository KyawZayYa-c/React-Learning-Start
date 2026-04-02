type Callback = (x: number) => void;
function processFun(callback: Callback) {
    console.log("Start processing...");
    callback(100);
    console.log("Finished processing.");
}

processFun((x: number) => console.log('callback'));

function callBackFun(x: number) {
    console.log("Second callback: " + x);   
}

processFun(callBackFun);

type BinaryFun = (a: number, b: number) => number;

let fun: BinaryFun = (a: number, b: number) => a + b;
console.log('Result: ' + fun(10, 20));

fun = (a: number, b: number) => a * b;
console.log('Result: ' + fun(10, 20));

