/*** 
 * Filename: complexCode.js
 * This code demonstrates a sophisticated and complex JavaScript program.
 * It includes various advanced concepts and techniques.
 */

// Util function to generate random number (between min and max)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Data structure representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Inheritance with Prototype
function Employee(name, age, company) {
  Person.call(this, name, age);
  this.company = company;
}
Employee.prototype = Object.create(Person.prototype);

// Create an object of the Person class
const john = new Person("John Doe", 30);
john.greet(); // Output: Hello, my name is John Doe

// Create an object of the Employee class
const emma = new Employee("Emma Watson", 35, "XYZ Corp");
emma.greet(); // Output: Hello, my name is Emma Watson

// Async function using Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating async API call
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(`Data received: ${data}`);
  // Perform complex data processing here
}

processData(); // Output: Fetching data... (after 2 seconds) Data received: 1,2,3,4,5

// Higher-Order Function: Closure
function multiplyBy(factor) {
  return function (value) {
    return value * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10

// Using Destructuring for object assignment
const person = { name: "Alice", age: 25, country: "US" };
const { name, age, country } = person;
console.log(`${name} (${age}) from ${country}`); // Output: Alice (25) from US

// Generator function to generate an infinite sequence
function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibSequence = fibonacci();
console.log(fibSequence.next().value); // Output: 0
console.log(fibSequence.next().value); // Output: 1
console.log(fibSequence.next().value); // Output: 1
console.log(fibSequence.next().value); // Output: 2
// ...

// Complex algorithm: Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found target at index 'mid'
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = binarySearch(numbers, 7); // Output: 6

// Complex regular expression matching
const regex = /(\w+)\s(\d+)/;
const text = "John 25, Jane 30";
const matches = text.match(regex);
console.log(matches); // Output: ["John 25", "John", "25"]

// Complex DOM manipulation
const container = document.getElementById("container");
const element = document.createElement("div");
element.textContent = "Hello World";
element.classList.add("text");
container.appendChild(element);

// Event handling
element.addEventListener("click", () => {
  element.classList.toggle("active");
});

// ... continue with more complex code
// ...