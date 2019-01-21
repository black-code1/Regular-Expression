/*D21 100DaysOfCode & D20 301DaysOfCode */

// Regular Expressions: Using the Test Method
// let myString = "Hello, World";
let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

// Regular Expressions: Match Literals Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

// Regular Expressions: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);
// console.log(result);

// Regular Expressions: Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
// let result = fccRegex.test(myString);
// console.log(result);

// Regular Expressions: Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

// Regular Expressions: Find More  Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);
// console.log(result);

// Regular Expressions: Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result);

// Regular Expressions: Match Single Character with Multiple Possibilities
// let quoteSample =
//   "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);

// Regular Expressions: Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);
// console.log(result);

/*D22 100DaysOfCode & D21 301DaysOfCode */

// Regular Expressions: Match Numbers and Letters of the Alphabet
