/*D21 100DaysOfCode & D20 301DaysOfCode */

// Regular Expressions: Using the Test Method
// let myString = "Hello, World";
// let myRegex = /Hello/;
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
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);
// console.log(result);

/*D22 & D23 100DaysOfCode & D21 301DaysOfCode */
//Learning something else out of freecodecamp, still on javascript

/*D24 100DaysOfCode & D21 301DaysOfCode */

// Regular Expressions: Match Numbers and Letters of the Alphabet
// let quoteSample = "BLueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

// Regular Expressions: Match Single Characters Not Specified
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeioy^0-99]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

// Regular Expressions: Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log(result);

/*D25 100DaysOfCode & D24 301DaysOfCode */

/*D26 100DaysOfCode & D25 301DaysOfCode */

//Regular Expressions:Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

//Regular Expressions:Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/;
// let result = text.match(myRegex);
// console.log(result);

//Regular Expressions:Find One or More Criminal in a Hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /C+/g;
// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

//Regular Expressions:Match Beginnig String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
// console.log(result);

/*D27 100DaysOfCode & D26 301DaysOfCode */

//Regular Expressions:Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

//Regular Expressions:Match All Letters and Numbers
// let quoteSample = " the five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

//Regular Expressions:Match Everything But Letters and Numbers
let quoteSample = " the five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

//Regular Expressions:Match All Numbers
// let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
// let result = numString.match(numRegex).length;
// console.log(result);

//Regular Expressions:Match All Non-Numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
// let result = numString.match(noNumRegex).length;
// console.log(result);

//Regular Expressions:Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
// let result = userCheck.test(username);
// console.log(result);

/*D28 100DaysOfCode & D27 301DaysOfCode */

//Regular Expressions:Match Whitespace

//Regular Expressions:Match Non-Whitespace Characters

//Regular Expressions:Specify Upper and Lower Number of Matches

//Regular Expressions:Specify Only the Lower Number of Matches

//Regular Expressions:Specify Exact Number of Matches

/*D29 100DaysOfCode & D28 301DaysOfCode */

//Regular Expressions:Check for All or None

//Regular Expressions:Positive and Negative Lookahead

//Regular Expressions:Reuse Patterns Using Capture Groups

//Regular Expressions:Use Capture Groups to Search and Replace

//Regular Expressions:Remove Whitespace from Start and End
