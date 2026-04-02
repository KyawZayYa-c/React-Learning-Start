interface Circle{
    radius: number;
}

interface ColoredCircle extends Circle{
    color: string;
}

let c2:ColoredCircle = {
    radius: 10,
    color : 'red'
}

console.log(c2);