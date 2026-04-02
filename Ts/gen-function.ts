// function firstElement(data: any[]) {
//     return data[0];
// }
// console.log('FirstElement ([1, 2, 3]) ', firstElement([1, 2, 3]));
// console.log('FirstElement (["a", "b", "c"]) ', firstElement(["a", "b", "c"]).toFixed());

function firstElement<T>(data: T[]) {
    return data[0];
}

console.log('FirstElement ([1, 2, 3]) ', firstElement([1, 2, 3]).toFixed(2));
console.log('FirstElement (["a", "b", "c"]) ', firstElement(["a", "b", "c"]).toUpperCase());

//55