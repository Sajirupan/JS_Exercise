// 6
                         
                                  // Number & String Questions
                                  
// 1. Write a program to round a floating number to 2 decimals and display it with a currency symbol using template literals.
let price = 155.245;
let roundprice = price.toFixed(2);
console.log(`Price: LKR ${roundprice}`);

// 2. Get a user’s full name and display it in uppercase without extra spaces.
let fullname = prompt("Enter your full name:");
let name = (fullname.trim());
let endname = (name.toUpperCase());
console.log(`Your name: ${endname}`);
// trim() → removes spaces before and after the name
// toUpperCase() → converts all letters to uppercase.

// 3. Format a receipt like:Item: Keyboard Price: Rs 250.00 (padEnd() for alignment.)
let item = "Keyboard";
let priceText = "Rs 250.00";
console.log(`Item: ${item.padEnd(15)} Price: ${priceText}`);


// 4. Convert "123abc" safely to a number and handle NaN using Number.isNaN()
let value = "123abc";
let numvalue =Number(value);
console.log(Number.isNaN(numvalue));
console.log(typeof(numvalue))

// 5. Create a function that takes a list of product prices and returns the total with commas (e.g., 1,234.56).
function calculateTotal(prices) {
// Step 1: Calculate total using reduce
let total = prices.reduce((sum, price) => sum + price, 0);
// Step 2: Format the total with commas and two decimal places
return total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
// Example usage:
let productPrices = [199.99, 499.5, 320.25, 1500];
console.log(calculateTotal(productPrices));

// 6. Clean unwanted characters from a text input like "hello@@world@@!".
let text = "hello@@world@@!";
let newtext = text.replace(/[@!]/g, " ");
console.log(newtext);
