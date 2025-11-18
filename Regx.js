// 19

                                // Regx Questions

// 1. Check if a string contains only digits
const regexOnlyDigits = /^\d+$/;
console.log("1. Only Digits ('12345'):", regexOnlyDigits.test('12345')); // true
console.log("1. Only Digits ('123a45'):", regexOnlyDigits.test('123a45')); // false

// 2. Validate an Email
// (Standard pattern for local-part@domain.tld)
const regexValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log("2. Validate Email ('test@example.com'):", regexValidateEmail.test('test@example.com')); // true
console.log("2. Validate Email ('test@example'):", regexValidateEmail.test('test@example')); // false

// 3. Validate 10-digit Phone Number (Exactly 10 digits)
const regexValidatePhoneNumber = /^\d{10}$/m;
console.log("3. Validate Phone ('1234567890'):", regexValidatePhoneNumber.test('1234567890')); // true
console.log("3. Validate Phone ('123456789'):", regexValidatePhoneNumber.test('123456789')); // false

// 4. Find All Numbers in a String
const regexFindNumbers = /\d+/g;
const textWithNumbers = "The year is 2024 and the price is $49.99.";
const allNumbers = textWithNumbers.match(regexFindNumbers);
console.log("4. Find All Numbers:", allNumbers); // ['2024', '49', '99']

// 5. Replace Multiple Spaces with One
const regexMultipleSpaces = /\s{2,}/g; // Matches 2 or more whitespace characters
const spacedString = "This string has excessive spaces.";
const singleSpacedString = spacedString.replace(regexMultipleSpaces, ' ');
console.log("5. Replace Spaces (Original):", spacedString);
console.log("5. Replace Spaces (Fixed):", singleSpacedString);

// 6. Check if String Starts with "Hello"
const regexStartsWithHello = /^Hello/i; // 'i' for case-insensitivity
console.log("6. Starts with 'Hello':", regexStartsWithHello.test('Hello World!')); // true
console.log("6. Starts with 'Hi':", regexStartsWithHello.test('Hi World!')); // false

// 7. Check if String Ends with ".com"
const regexEndsWithCom = /\.com$/;
console.log("7. Ends with '.com':", regexEndsWithCom.test('google.com')); // true
console.log("7. Ends with '.net':", regexEndsWithCom.test('google.net')); // false

// 8. Extract All Words
const regexExtractWords = /\b\w+\b/g;
const wordsText = "The quick brown fox jumped over the lazy dog.";
const extractedWords = wordsText.match(regexExtractWords);
console.log("8. Extract All Words:", extractedWords);
// Expected: ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

// 9. Replace All Vowels with *
const regexReplaceVowels = /[aeiou]/gi; // 'g' for global, 'i' for case-insensitive
const sentence = "Programming is Fun!";
const censoredSentence = sentence.replace(regexReplaceVowels, '*');
console.log("9. Replace Vowels (Original):", sentence);
console.log("9. Replace Vowels (Censored):", censoredSentence); // Pr*gr*mm*ng *s F*n!

// 10. Validate Password (>= 6 Characters)
const regexPasswordLength = /^.{6,}$/; // Matches any character (.), 6 or more times ({6,}), from start (^) to end ($)
console.log("10. Password >= 6 Chars ('pass12'):", regexPasswordLength.test('pass12')); // true
console.log("10. Password >= 6 Chars ('p4s'):", regexPasswordLength.test('p4s')); // false

// 11. Only Letters (No numbers or spaces)
const regexOnlyLetters = /^[a-zA-Z]+$/;
console.log("11. Only Letters ('Apple'):", regexOnlyLetters.test('Apple')); // true
console.log("11. Only Letters ('Apple123'):", regexOnlyLetters.test('Apple123')); // false

// 12. Extract Hashtags
const regexExtractHashtags = /#(\w+)/g; // Matches # followed by one or more word characters, capturing the word
const tweet = "I love #JavaScript and #Regex! This is fun.";
const extractedHashtags = [...tweet.matchAll(regexExtractHashtags)].map(match => match[1]);
console.log("12. Extract Hashtags:", extractedHashtags); // ['JavaScript', 'Regex']

// 13. Contains At Least One Digit
const regexContainsDigit = /\d/;
console.log("13. Contains Digit ('abc123'):", regexContainsDigit.test('abc123')); // true
console.log("13. Contains Digit ('abc'):", regexContainsDigit.test('abc')); // false

// 14. Contains At Least One Uppercase Letter
const regexContainsUppercase = /[A-Z]/;
console.log("14. Contains Uppercase ('Test'):", regexContainsUppercase.test('Test')); // true
console.log("14. Contains Uppercase ('test'):", regexContainsUppercase.test('test')); // false

// 15. Contains At Least One Lowercase Letter
const regexContainsLowercase = /[a-z]/;
console.log("15. Contains Lowercase ('Test'):", regexContainsLowercase.test('Test')); // true
console.log("15. Contains Lowercase ('TEST'):", regexContainsLowercase.test('TEST')); // false

// 16. Contains At Least One Special Character
// (Matches any character that is not a word character or whitespace)
const regexContainsSpecialChar = /[^\w\s]/;
console.log("16. Contains Special Char ('Test!'):", regexContainsSpecialChar.test('Test!')); // true
console.log("16. Contains Special Char ('Test'):", regexContainsSpecialChar.test('Test')); // false


// 17. Validate Date (DD/MM/YYYY)
// (Simple structure check, not strictly validating leap years or 31 days in Feb)
const regexValidateDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log("17. Validate Date ('31/12/2025'):", regexValidateDate.test('31/12/2025')); // true
console.log("17. Validate Date ('40/12/2025'):", regexValidateDate.test('40/12/2025')); // false

// 18. Find Words Starting with a Capital Letter
const regexCapitalizedWords = /\b[A-Z]\w*/g; // \b: word boundary, [A-Z]: uppercase, \w*: 0 or more word characters
const mixedText = "The Apple is Red and the Banana is Yellow. JS.";
const capitalizedWords = mixedText.match(regexCapitalizedWords);
console.log("18. Capitalized Words:", capitalizedWords); // ['The', 'Apple', 'Red', 'Banana', 'Yellow', 'JS']

// 19. Remove Non-Alphanumeric Characters (Keeps letters, numbers, and spaces)
const regexRemoveNonAlphanumeric = /[^\w\s]/g; // Matches anything NOT (\^): word character (\w) or whitespace (\s)
const dirtyString = "Text with symbols! @#$% and numbers 123.";
const cleanedString = dirtyString.replace(regexRemoveNonAlphanumeric, '');
console.log("19. Remove Non-Alphanumeric (Original):", dirtyString);
console.log("19. Remove Non-Alphanumeric (Cleaned):", cleanedString); // "Text with symbols and numbers 123"











