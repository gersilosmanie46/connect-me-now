/* 
 * Filename: sophisticated_code.js
 * Content: A sophisticated and elaborate JavaScript code demonstrating various advanced concepts and techniques.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}

// Array of prime numbers
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1)
    return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
      return false;
  }

  return true;
}

// Higher-order function to filter prime numbers
function filterPrimes(arr, callback) {
  return arr.filter(callback);
}

// Callback function for filtering prime numbers
function filterByDigitCount(num) {
  return num.toString().length === 2;
}

// Promisify setTimeout
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Async function to perform an action after delay
async function performAction() {
  console.log("Performing an action...");
  await delay(2000);
  console.log("Action performed!");
}

// ES6 Map
const mapExample = new Map();
mapExample.set(1, "Apple");
mapExample.set(2, "Banana");
mapExample.set(3, "Cherry");

// Regular expression to validate emails
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

// Module pattern
const module = (function() {
  let privateValue = 42;

  function privateMethod() {
    console.log("Private method called!");
  }

  return {
    publicValue: 21,
    publicMethod: function() {
      console.log(`Public value: ${this.publicValue}`);
      privateMethod();
    }
  };
})();

// Generator function
function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Creating an instance of Person class
const person = new Person("John Doe", 30);
console.log(person.getInfo());

// Calculating factorial
console.log(`Factorial of 5: ${factorial(5)}`);

// Filtering prime numbers of two digits
const filteredPrimes = filterPrimes(primes, filterByDigitCount);
console.log("Filtered Primes:", filteredPrimes);

// Checking if a number is prime
console.log("Is 23 Prime?", isPrime(23));

// Performing an action after delay
performAction();

// Iterating over a Map
for (let [key, value] of mapExample) {
  console.log(key, value);
}

// Validating emails using regex
console.log("Is 'test@example.com' a valid email?", emailRegex.test('test@example.com'));

// Calling public method from module pattern
module.publicMethod();

// Generating Fibonacci numbers
const fibGenerator = fibonacci();
console.log("First 10 Fibonacci numbers:");
for (let i = 0; i < 10; i++) {
  console.log(fibGenerator.next().value);
}

// ... Keep adding more complex and sophisticated code here ...