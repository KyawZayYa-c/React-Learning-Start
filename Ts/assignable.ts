type voidFunc = () => void;

const f1: voidFunc = () => {
    return 12;
}

console.log('F1 ', f1());

const f2: voidFunc = () => true;
console.log('f2 => ', f2);

const f3: voidFunc = function () {
    return true;
}
console.log('f3 -> ', f3);