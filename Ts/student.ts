class Student{
    static headmaster = "Mr. Smith";
    name: string;
    age: string;
    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }
    
    display() {
        console.log(`Stuent Name : ${this.name} , Age : ${this.age}, Headmaster : ${Student.headmaster}`);
    }

}
let stud1 = new Student("Alice", "12");
let stud2 = new Student("Bob", "22");

Student.headmaster = "Alice";
stud1.display();
stud2.display();

