// //11 + 11 = 22

                              //  Array Questions

                                  // PART 1

//1. Access First and Last Elements
let Numbers = [10, 20, 30, 40, 50];
let first = Numbers.at(0);
let last = Numbers.at(-1);
 console.log("first Number:", first);  // first Number: 10
console.log("Last Number:", last);  // Last Number: 50 

// 2. Add Elements
let NUmbers = [10, 20, 30, 40];
NUmbers.push(50);
NUmbers.unshift(0);
console.log(NUmbers);  //(6) [0, 10, 20, 30, 40, 50]

//3. Remove Elements
let NUMbers = [10, 20, 30, 40, 50];
NUMbers.pop();
NUMbers.shift();
console.log(NUMbers);  //(3) [20, 30, 40]           

//4. Loop Through Array
let NUMBers = [10, 20, 30, 40, 50];
for (let i = 0; i < NUMBers.length; i++) {
  console.log(NUMBers[i]);   // [10, 20, 30, 40, 50]
}  

//5. Use forEach()
let NUMBErs = [10, 20, 30, 40, 50];
NUMBErs.forEach(function(NUM) {
  console.log(NUM);   // [10, 20, 30, 40, 50]
});

//6. Find Maximum and Minimum
let NUMBERs = [10, 25, 5, 40, 15];
let max = Math.max(...NUMBERs);
let min = Math.min(...NUMBERs);
console.log("(Maximum):", max);  //(Maximum): 40
console.log("(Minimum):", min);  //(Minimum): 5

//7. Check for Element
let NUMBERS = [10, 20, 30, 36, 40, 50];
if (NUMBERS .includes(36)) {
  console.log("36 in the array");    //36 in the array
} else {
  console.log("36 array not exist");
}

//8. Sum of Elements
let numberssss = [10, 20, 30, 40, 50];
let sum = numberssss.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);  // Sum: 150

//9. Sort Array
let numbersss = [40, 10, 50, 20, 30];
numbersss.sort((a, b) => a - b);
console.log("Ascending order:", numbersss);   //Ascending order: (5) [10, 20, 30, 40, 50]

//10. Reverse Array
let numberss = [10, 20, 30, 40, 50];
numberss.reverse();
console.log("Reversed Array:", numberss);      //Reversed Array: (5) [50, 40, 30, 20, 10]

//11. Filter Numbers
let numbers = [2, 5, 8, 1, 10, 4];
let filteredNumbers = numbers.filter(num => num > 5);
console.log("Filtered Numbers:", filteredNumbers);      //Filtered Numbers: (2) [8, 10]



                             // PART 2

// 1. Create & Access Arrays
// Sample Array:
const arr = [10, 15, 20, 25, 30];
// Access first and last element
console.log(arr[0]);        // 10
console.log(arr[arr.length - 1]);   // 30

// 2. Filter the array to return even numbers
const numberS = [10, 15, 20, 25, 30];
const even = numberS.filter(num => num % 2 === 0);
console.log(even);   // [10, 20, 30]

// 3. Find the student with grade "A"
const students = [
  { name: 'Alice', grade: 'B' },
  { name: 'Bob', grade: 'A' },
  { name: 'Charlie', grade: 'C' }
];
const topper = students.find(student => student.grade === 'A');
console.log(topper);    // { name: "Bob", grade: "A" }

// 4. Calculate the sum using reduce()
const nums = [10, 15, 20, 25, 30];
const total = nums.reduce((sum, value) => sum + value, 0);
console.log(total);   // 100

// 5. Merge two arrays using spread operator
const a = [1,2,3];
const b = [4,5,6];
const merged = [...a, ...b];
console.log(merged);   // [1,2,3,4,5,6]

// 6. Extract first two elements using destructuring
const array = [100, 200, 300, 400];
const [firsT, second] = array;
console.log(firsT);   // 100
console.log(second);  // 200

// 7. Flatten a nested array using flat()
const nested = [[1,2], [3,4], [5,6]];
const flatArray = nested.flat();
console.log(flatArray);   // [1,2,3,4,5,6]

// 8. Rest Parameter — average(...scores)
function average(...scores) {
  const total = scores.reduce((sum, val) => sum + val, 0);
  return total / scores.length;
}
console.log(average(10, 20, 30));   // 20

// 9. Check if number 25 exists (includes)
const arr2 = [10, 15, 20, 25, 30];
console.log(arr2.includes(25));   // true

// 10. Convert string to array using Array.from()
const word = 'HELLO';
const letters = Array.from(word);
console.log(letters);   // ["H","E","L","L","O"]

// 11. Access last element using at(-1)
const arr3 = [5, 10, 15, 20, 25];
console.log(arr3.at(-1));   // 25