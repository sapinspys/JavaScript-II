// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
a = [1,2,3]
const mapA = (multiplier) => {
  return a.map(num => num*10);
} 

console.log(mapA(10))

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => { 
 let num = 1;
 const plusLog = () => {
   console.log(num);
   num += 1;
  } 
return plusLog
};

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterMachine = {
    num: 1,
    increment() {
      console.log(num);
      num += 1;
    },
    decrement() {
      console.log(num);
      num -= 1;
    } 
  }
};

const newCounterMachine = counterMachine();
