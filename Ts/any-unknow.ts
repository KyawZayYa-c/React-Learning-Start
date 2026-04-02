let a: any = "Hello Worldcons";
console.log(a); // Output: Hello World

a = 42;
console.log(a); // Output: 42

a = () => console.log("This is a function");
a(); // Output: This is a function

a = { name: "Alice", age: 30 };
console.log(a); // Output: Alice

let b: unknown = "Hello World";
console.log(b); // Output: Hello World

b = 42;
console.log(b); // Output: 42

b = () => console.log("This is a function 'B' ");
console.log(b)

b = { name: "Bob", age: 25 };
console.log(b); // Output: Bob
//console.log(b.name); // Error: Object is of type 'unknown'.