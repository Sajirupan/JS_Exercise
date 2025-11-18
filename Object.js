// 11 + 7 = 18

                                   // Object Questions

                                //    part 1

// 1.How do you create an empty JavaScript object?
let Person = {};

// 2. Create an Object with Properties and Methods
let person = {
  name: "Sajii",
  age: 21,
  IntroduceYou: function(p) {
    console.log(`Hi, my name is ${p.name} and I am ${p.age} years old.`);
  }
};
person.IntroduceYou(person);

// 3. Create a Method that Greets Students
let personn = {
  name: "Kapi",
  age: 20,
  greetStudent: function(student) {
    console.log(`Hello ${student.name}, Welcome to the Coding School!`);
  }
};
let Student = {
  name: "Kapi"
};
personn.greetStudent(Student);

// 4. Access Object Properties
let personnn = {
  name: "Thuva",
  age: 22,
  city: "Jaffna"
};

console.log(personnn.name);  
console.log(personnn.age);    
console.log(personnn["city"]);  
console.log(personnn["age"]);   

// 5. Add a New Property
let Personn = {
  name: "Api",
  age: 20
};
Personn.email = "api@gmail.com";
console.log(Personn);

// 6. Remove a Property
let PERSON = {
  name: "Roni",
  age: 20,
  email: "roni@gmail.com"
};
console.log(PERSON);
delete PERSON.email;
console.log(PERSON);

// 7. Check Property Existence
// person object
let PERSONN = {
  name: "Jeru",
  age: 20,
  city: "Mannar"
};
// in' operator 
console.log("name" in PERSONN);   // true
console.log("email" in PERSONN);  // false
// hasOwnProperty() method 
console.log(PERSONN.hasOwnProperty("age"));   // true
console.log(PERSONN.hasOwnProperty("email")); // false

// 8. Merge Two Objects
let student = {
  name: "Saran",
  age: 24
};
let course = {
  courseName: "JavaScript",
  duration: "6 months"
};
let studentCourse = { ...student, ...course };
console.log(studentCourse);

 // 9. Check for a Specific Property
let persoN = {
    name: "Monica",
    age: 21,
    address: "Jaffna"
};

if ("address" in persoN) {
  console.log("Address is there");
} 
else {
  console.log("Address not found");
}

// 10. Convert Object to JSON
let book = {
    title: "The Heros",
    author: "Super Hero",
    year: 2004
};
let jsonString = JSON.stringify(book);
console.log(jsonString);

// 11. Array of Objects
let students = [
    { name: "Kapi", age: 20, gpa: 2.8 },
    { name: "Thuva", age: 22, gpa: 2.7 },
    { name: "Roni", age: 20, gpa: 2.8 }
];
console.log(students[0]);       
console.log(students[1].name); 
console.log(students[2].gpa);  

                                 // Part 2

// 1.Create an object representing a student and destructure name and age.
let studenT = {
    name: "Saii",
    age: 21,
    gpa: 2.5
};
// let { name, age } = studenT;
console.log(studenT.name); 
console.log(studenT.age);  

// 2.Use shorthand syntax to create an object inside a function.
function createStudent(name, age) {
    return { name, age };  
}

let s = createStudent("Abi", 20);
console.log(s); 

 // 3.Clone and update an object using the spread operator {...}.
let studeNt = { name: "Jeru", age: 20, gpa: 2.9 };
let updatedStudeNt = { ...studeNt, gpa: 3.0 };
console.log(updatedStudeNt);

// 4.Convert an object to array using Object.entries() and back using Object.fromEntries().
let studEnt = { name: "Saran", age: 24 };
// Object → array
let entries = Object.entries(studEnt);
console.log(entries); 
// Array → object
let newStudEnt = Object.fromEntries(entries);
console.log(newStudEnt); 

// 5.Write a method inside an object that calculates tax based on salary.
let employee = {
    name: "Kapi",
    salary: 100000,
    calculateTax() {
        return this.salary * 0.1; 
    }
};
console.log(employee.calculateTax());

// 6.Use optional chaining to access a nested property safely.
let peRson = {
    name: "Jeru",
    contact: {
        email: "jeru@gmail.com"
    }
};
console.log(peRson.contact); 

// 7.Merge two objects (e.g., user info and contact info).
let userInfo = { name: "Abi", age: 20 };
let contactInfo = { email: "abi@gmail.com", phone: "+94764564567" };

let merged = { ...userInfo, ...contactInfo };
console.log(merged);

