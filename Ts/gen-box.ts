type GenBox<T> = {
    valule: T;
}

let numBox: GenBox<number> = {
    valule: 123
}

console.log('gem Box -=> ', numBox.valule.toFixed());

let strBox: GenBox<string> = {
    valule : "Hello"
}

console.log('gen Box -=> ', strBox.valule.toUpperCase());

let arr: Array<number> = [1, 2, 3, 4, 5];
console.log('Gen box' )