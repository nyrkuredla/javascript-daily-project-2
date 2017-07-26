// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    // Your answer here
    if (x === y) {
      return "One number must be greater than the other; please try again!";
    }
    else if (x > y) {
      return x + " is greater";
    }
    else {
      return y + " is greater";
    }
}

console.log(max(3, 2)); //3 is bigger
console.log(max(2, 3)); //3 is bigger
console.log(max(2, 2)); //One number must be greater than the other; please try again


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
    // Your answer here
    if ((x > y) && (x > z)) {
      return x + " is biggest";
    }
    else if ((y > x) && (y > z)) {
      return y + " is biggest";
    }
    else if ((z > x) && (z > y)) {
      return z + " is biggest";
    }
    else {
      return "One number must be biggest; please try again";
    }
}

console.log(maxOfThree(1, 2, 3)); //3 is biggest
console.log(maxOfThree(2, 3, 1)); //3 is biggest
console.log(maxOfThree(3, 1, 2)); //3 is biggest
console.log(maxOfThree(2, 3, 3)); //One number must be biggest; please try again


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      return true;
    }
    else {
      return false;
    }
}

console.log(isVowel("a")); //true
console.log(isVowel("e")); //true
console.log(isVowel("b")); //false
console.log(isVowel(1)); //false

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x, y) {
  if ((typeof(x) !== 'number') || (typeof(y) !== 'number')) {
    return "Please give two numbers";
  }
  else {
    return x + y;
  }

}

console.log(sum(2, 3)); // 5
console.log(sum("a", 2)); // Please give two numbers


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z) {
  if ((typeof(x) !== 'number') || (typeof(y) !== 'number') || (typeof(z) !== 'number')) {
    return "Please give three numbers";
  }
  else {
    return (x + y + z) / 3;
  }
}
console.log(avg(1, 2, 3)); // 2
console.log(avg(2, "hello", 3));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(x) {
  if (typeof(x) !== 'string') {
    return "Please enter a string!";
  }
  else {
    return x.length;
  }
}

console.log(getLength("hiiiiiiiii")); // 10
console.log(getLength(5)); // Please enter a string!



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x, y){
  if ((typeof(x) !== 'number') || (typeof(y) !== 'number')) {
    return "Please type two numbers!";
  }
  else if (x < y) {
    return true;
  }
  else {
    return false;
  }
}

console.log(greaterThan(3, 4)); // true
console.log(greaterThan(4, 3)); // false
console.log(greaterThan(4, "hi!")); // Please type two numbers!


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(x) {
  if (typeof(x) !== 'string') {
    return "Please enter a string!";
  }
  else {
    return "Hello, " + x + "!";
  }
}

console.log(greet("Mark")); // Hello, Mark!
console.log(greet("Xbghjkejkej")); // Hello, Xbghjkejkej!
console.log(greet(5)) // Please enter a string!

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (x, y, z, a) {
  if ((typeof(x) !== 'string') || (typeof(y) !== 'string') || (typeof(z) !== 'string') || (typeof(a) !== 'string')) {
    return "Please give four words";
  }
  else {
    const madSentence = "The " + x + " dog saw a " + y + " and ate the " + z + " after it ran to the " + a;
    return madSentence;
  }
}


console.log(madlib("blue", "elephant", "shoe", "bird"));
console.log(madlib("green", 3, 4, 5));
