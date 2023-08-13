class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

const person1 = new Person("NAVID", 22);
person1.introduce();

const student1 = new Student("PROVI", 22, "Computer Science");
student1.introduce();