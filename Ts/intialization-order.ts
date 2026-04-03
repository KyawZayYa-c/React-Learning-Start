class Base {
    name = 'Base';
    constructor() {
        console.log("My name is : " + this.name)
    }
}

class Derived extends Base{
    name = "Derived";
    constructor() {
        super();
        console.log("Derived name is : " + this.name);
    }
}

let d = new Derived();