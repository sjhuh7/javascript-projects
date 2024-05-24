console.log('Hello, JavaScript.');
console.log(2001);
console.log("What","do","commas","do?");
console.log("Does", "adding",      "space", "matter?");
console.log('Launch' + 'Code');
console.log("\tLaunchCode \twas \tfounded \tin", 2013);
console.log("Bruce's beard")

const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);