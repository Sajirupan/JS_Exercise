// 11 + 11 = 22


//  Array Questions


//1. Access First and Last Elements
let Numbers = [10, 20, 30, 40, 50];
let first = Numbers.at(0);
let last = Numbers.at(-1);
console.log("first Number:", first);
console.log("Last Number:", last);

// 2. Add Elements
let NUmbers = [10, 20, 30, 40];
NUmbers.push(50);
NUmbers.unshift(0);
console.log(NUmbers);

//3. Remove Elements
let NUMbers = [10, 20, 30, 40, 50];
NUMbers.pop();
NUMbers.shift();
console.log(NUMbers);

//4. Loop Through Array
let NUMBers = [10, 20, 30, 40, 50];
for (let i = 0; i < NUMBers.length; i++) {
  console.log(NUMBers[i]);
}

//5. Use forEach()
let NUMBErs = [10, 20, 30, 40, 50];
NUMBErs.forEach(function(NUM) {
  console.log(NUM);
});

//6. Find Maximum and Minimum
let NUMBERs = [10, 25, 5, 40, 15];
let max = Math.max(...NUMBERs);
let min = Math.min(...NUMBERs);
console.log("(Maximum):", max);
console.log("(Minimum):", min);

//7. Check for Element
let NUMBERS = [10, 20, 30, 36, 40, 50];
if (NUMBERS .includes(36)) {
  console.log("36 in the array");
} else {
  console.log("36 array not exist");
}

//8. Sum of Elements
let numberssss = [10, 20, 30, 40, 50];
let sum = numberssss.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

//9. Sort Array
let numbersss = [40, 10, 50, 20, 30];
numbersss.sort((a, b) => a - b);
console.log("Ascending order:", numbersss);

//10. Reverse Array
let numberss = [10, 20, 30, 40, 50];
numberss.reverse();
console.log("Reversed Array:", numberss);

//11. Filter Numbers
let numbers = [2, 5, 8, 1, 10, 4];
let filteredNumbers = numbers.filter(num => num > 5);
console.log("Filtered Numbers:", filteredNumbers);