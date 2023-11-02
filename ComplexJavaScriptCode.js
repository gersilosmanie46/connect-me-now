/*
  File: ComplexJavaScriptCode.js
  Description: This file contains a sophisticated and complex JavaScript code
  that showcases various programming concepts and techniques.
*/

// Define an Employee class with constructor
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // Implement a method to calculate annual bonus
  calculateBonus() {
    return this.salary * 0.1;
  }
}

// Create an array of employees
const employees = [
  new Employee("John Doe", 30, 50000),
  new Employee("Jane Smith", 35, 60000),
  new Employee("Alice Johnson", 28, 45000),
  new Employee("Bob Williams", 45, 70000)
];

// Use higher-order functions to perform operations on the employee array
const filteredEmployees = employees
  .filter(emp => emp.age < 40) // Filter employees under 40 years old
  .map(emp => ({ name: emp.name, bonus: emp.calculateBonus() })) // Calculate bonus for each employee
  .sort((a, b) => b.bonus - a.bonus); // Sort employees by bonus in descending order

// Print the filtered and sorted employees
console.log("Filtered and Sorted Employees:");
filteredEmployees.forEach(emp => {
  console.log(`${emp.name} - Bonus: $${emp.bonus}`);
});

// Create a class to perform geometric calculations
class Geometry {
  constructor(shape) {
    this.shape = shape;
  }

  // Method to calculate the area of a square
  squareArea(side) {
    return side * side;
  }

  // Method to calculate the area of a triangle
  triangleArea(base, height) {
    return (base * height) / 2;
  }

  // Method to calculate the circumference of a circle
  circleCircumference(radius) {
    return 2 * Math.PI * radius;
  }
}

// Instantiate Geometry class and perform calculations
const geometry = new Geometry();
console.log("Square Area:", geometry.squareArea(5));
console.log("Triangle Area:", geometry.triangleArea(6, 4));
console.log("Circle Circumference:", geometry.circleCircumference(3));

// Create a utility function to generate random numbers within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Use a loop to generate random numbers and calculate their sum
let sum = 0;
for (let i = 0; i < 10; i++) {
  const randomNum = getRandomNumber(1, 100);
  sum += randomNum;
}

console.log("Random Numbers Sum:", sum);

// Implement a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial of 5:", factorial(5));

// Define a closure function to add two numbers and return the sum
function addNumbers(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = addNumbers(5);
console.log("Add 5 + 3:", add5(3));

// Implement a generator function to generate an infinite sequence of numbers
function* infiniteSequence() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const numberGenerator = infiniteSequence();
console.log("First 5 numbers from infinite sequence:");
for (let i = 0; i < 5; i++) {
  console.log(numberGenerator.next().value);
}

// ... (Continued code, more than 200 lines)
