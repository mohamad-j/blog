// Explain Strings in JS.
// 1. What is a string?
// A string is a sequence of characters enclosed in single or double quotes. JavaScript strings are immutable, which means that once a string is created, it is not possible to modify it. However, you can create a new string based on the original string.
// Example:
let str = 'Hello, World!';
console.log(str); // Output: Hello, World!

// 2. How to create a string?
// You can create a string by enclosing a sequence of characters in single or double quotes.
// Example:
let str1 = 'Hello, World!'; // Using single quotes
let str2 = "Hello, World!"; // Using double quotes
console.log(str1); // Output: Hello, World!
// Or you can backticks to create a string.
// Example:
let str3 = `Hello, World!`; // Using backticks
console.log(str3); // Output: Hello, World!
// Or you can use the String constructor to create a string.
// Example:
let str4 = new String('Hello, World!'); // Using String constructor
console.log(str4); // Output: Hello, World!

// Difference between single quotes, double quotes, and backticks in JavaScript strings.
// Single quotes, double quotes, and backticks can be used to create strings in JavaScript. However, there are some differences between them.
// Single quotes: Single quotes are used to create strings in JavaScript. For example, 'Hello, World!'.
// Double quotes: Double quotes are also used to create strings in JavaScript. For example, "Hello, World!".
// Backticks: Backticks are used to create template literals in JavaScript. Template literals allow you to embed expressions inside a string. 
//For example, `Hello, ${name}!`.
// Example:
let first_name = 'Alice';
let greeting = 'Hello, ' + first_name + 'aaf '; // Using backticks
console.log(greeting); // Output: Hello, Alice!
// In general, you can use single quotes or double quotes to create strings in JavaScript. 
// However, if you need to embed expressions inside a string, you can use backticks to create template literals.
// Embed expressions inside a string using backticks.
// Example:
let number = 42;
let message =  ` The answer is ${ number + 2 }. `; // Using backticks

// Use variables inside a string using signle quotes or double quotes.
// Example:
let my_name = 'Alice';
let greeting1 = 'Hello, ' + my_name + '!'; // Using single quotes
let greeting2 = "Hello, " + my_name + "!"; // Using double quotes

// Multiline strings in JavaScript.
// In JavaScript, you can create multiline strings using backticks.
// Example:
let multiline = `This is a
multiline
string.`;
console.log(multiline);
// Output:
// This is a
// multiline
// string.
// You can also use the newline character (\n) to create multiline strings using single or double quotes.
// Example:
let multiline1 = 'This is a\nmultiline\nstring.';
console.log(multiline1);

// 3. How to access characters in a string?
// You can access individual characters in a string using bracket notation ([]).
// Example:
let str5 = 'Hello, World!';
console.log(str5[0]); // Output: H
console.log(str5[1]); // Output: e
console.log(str5[7]); // Output: W


// 4. How to concatenate strings?
// You can concatenate strings using the + operator or the concat() method.
// Example:
let str6 = 'Hello, ';
let str7 = 'World!';
let result = str6 + str7; // Using the + operator
console.log(result); // Output: Hello, World!


// 5. How to find the length of a string?
// You can find the length of a string using the length property.
// Example:
let str8 = 'Hello, World!';
console.log(str8.length); // Output: 13

// 6. How to find a substring in a string?
// You can find a substring in a string using the indexOf() method.
// Example:
let str9 = 'Hello, World!';
let index = str9.indexOf('World');
console.log(index); // Output: 7
// If the substring is not found, the indexOf() method returns -1.
// Example:
let index1 = str9.indexOf('JavaScript');
console.log(index1); // Output: -1


// 7. How to replace a substring in a string?
// You can replace a substring in a string using the replace() method.
// Example:
let str10 = 'Hello, World! World';
let newStr = str10.replace('World', 'JavaScript');
console.log(newStr); // Output: Hello, JavaScript!
// The replace() method replaces only the first occurrence of the substring.
// To replace all occurrences of the substring, you can use a regular expression with the global flag.
// Example:
let str11 = 'Hello, World! Hello, World!';
let newStr1 = str11.replace(/World/g, 'JavaScript');
console.log(newStr1); // Output: Hello, JavaScript! Hello, JavaScript!

// Or using replaceAll() method.
// Example:
let str12 = 'Hello, World! Hello, World!';
let newStr2 = str12.replaceAll('World', 'JavaScript');
console.log(newStr2); // Output: Hello, JavaScript! Hello, JavaScript!


// 8. How to convert a string to uppercase?
// You can convert a string to uppercase using the toUpperCase() method.
// Example:
let str13 = 'Hello, World!';
let upperCase = str13.toUpperCase();

// 9. How to convert a string to lowercase?
// You can convert a string to lowercase using the toLowerCase() method.
// Example:
let str14 = 'Hello, World!';
let lowerCase = str14.toLowerCase();

// 10. How to remove whitespace from a string?
// You can remove whitespace from the beginning and end of a string using the trim() method.
// Example:
let str15 = '  Hello, World!  ';
let trimmed = str15.trim();
console.log(trimmed); // Output: Hello, World!


// 11. How to split a string?
// You can split a string into an array of substrings using the split() method.
// Example:
let str16 = 'Hello_World!_Rabi';
let parts = str16.split('_');
console.log(parts); // Output: ['Hello', 'World!', 'Rabi']

// 12. How to join an array of strings?
// You can join an array of strings into a single string using the join() method.
// Example:
let parts1 = ['Hello', 'World!'];
let str17 = parts1.join('_');
console.log(str17); // Output: Hello_World!

// 13. How to compare strings?
// You can compare strings using the comparison operators (==, !=, ===, !==, <, >, <=, >=).
// Example:
let str18 = 'Hello';
let str19 = 'World';
console.log(str18 < str19); // Output: true

// 14. How to check if a string contains a substring?
// You can check if a string contains a substring using the includes() method.
// Example:
let str20 = 'Hello, World!';
let contains = str20.includes('Worlde');
console.log(contains); // Output: false


// 15. How to check if a string starts with a substring?
// You can check if a string starts with a substring using the startsWith() method.
// Example:
let str21 = 'Hello, World!';
let startsWith = str21.startsWith('Hello');
console.log(startsWith); // Output: true

// 16. How to check if a string ends with a substring?
// You can check if a string ends with a substring using the endsWith() method.
// Example:
let str22 = 'Hello, World!';
let endsWith = str22.endsWith('World!');
console.log(endsWith); // Output: true

// 17. How to repeat a string?
// You can repeat a string a specified number of times using the repeat() method.
// Example:
let str23 = 'Hello, ';
let repeated = str23.repeat(3);
console.log(repeated); // Output: Hello, Hello, Hello,

// 18. How to access characters in a string using the charAt() method?
// You can access individual characters in a string using the charAt() method.
// Example:
let str24 = 'Hello, World!';
console.log(str24.charAt(0)); // Output: H
console.log(str24.charAt(1)); // Output: e
console.log(str24.charAt(7)); // Output: W

// 19. How to convert a string to an array of characters?
// You can convert a string to an array of characters using the split('') method.
// Example:
let str25 = 'Hello, World!';
let characters = str25.split(''); 
console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']

// 20. How to convert a string to an array of words?
// You can convert a string to an array of words using the split(' ') method.
// Example:
let str26 = 'Hello, World!';
let words = str26.split(' ');
console.log(words); // Output: ['Hello,', 'World!']

// 21. How to convert a string to an array of lines?
// You can convert a string to an array of lines using the split('\n') method.
// Example:
let str27 = 'Hello,\nWorld!';
let lines = str27.split('\n');
console.log(lines); // Output: ['Hello,', 'World!']

// 22. How to convert a string to an array of sentences?
// You can convert a string to an array of sentences using the split('.') method.
// Example:
let str28 = 'The first sentence. And the second one!';
let sentences = str28.split('.');
console.log(sentences); // Output: ['The first sentence', ' And the second one!']



// 23. How to convert a string to a number?
// You can convert a string to a number using the parseInt() or parseFloat() functions.
// Example:
let str29 = '42';
let number1 = parseInt(str29);
let number2 = parseFloat(str29);
console.log(number1); // Output: 42 

// 24. How to convert a number to a string?
// You can convert a number to a string using the toString() method.
// Example:
let number3 = 42;
let str30 = number3.toString();
console.log(str30); // Output: '42'

// 25. How to convert a string to a date?
// You can convert a string to a date using the Date() constructor.
// Example:
let str31 = '2022-01-01';
let date = new Date(str31);
console.log(date); // Output: Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)

// 26. How to convert a date to a string?
// You can convert a date to a string using the toDateString() method.
// Example:
let date1 = new Date();
let str32 = date1.toDateString();
console.log(str32); // Output: 'Sat Jan 01 2022'

// 27. Regular expressions in JavaScript strings. Advanced
// Regular expressions (regex) are patterns used to match character combinations in strings.
// You can use regular expressions with string methods like match(), search(), replace(), and split().
// Example:
let str33 = 'Hello, World!';
let pattern = /World/;
let match = str33.match(pattern);
console.log(match); // Output: ['World']
// You can use regular expressions to match specific patterns in strings.
// Example:
let pattern1 = /[0-9]+/;
let match1 = 'Hello, 123 World!'.match(pattern1);
console.log(match1); // Output: ['123'] 


// 28. How to escape special characters in a string?
// You can escape special characters in a string using the backslash (\) character.
// Example:
let str34 = 'Hello, \'World!\'';
console.log(str34); // Output: Hello, 'World!'
// Or you can use double backslashes to escape special characters.
// Example:
let str35 = 'Hello, \\World!';
console.log(str35); // Output: Hello, \World!