class Container{
    x = 10;
    private y = 20;
    #z = 30; 
    protected show(){
        console.log("This is a private method.");
    }
}

class specialContainer extends Container{
    display() {
        super.show();
        console.log("SpecialContainer display");
        this.show(); // Allowed: 'show' is protected and accessible within subclass
    }
}

let container = new specialContainer();
//container.show(); // Error: Property 'show' is private and only accessible within class 'Container'.
console.log(container.x); // Output: 10

// console.log(container.y); // Error: Property 'y' is private and only accessible within class 'Container'.