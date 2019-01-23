// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {console.log(length)})


function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

last(items, function(lastItem) {console.log(lastItem)})


function sumNums(x, y, cb) {
  return cb(x+y)
}

sumNums(2, 3, function(add) {console.log(add)})


function multiplyNums(x, y, cb) {
  return cb(x*y)
}

multiplyNums(2, 4, function(multiply) {console.log(multiply)})


function contains(item, list, cb) {
  return cb(list.includes(item))
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
}

contains('Pencil', items, function(compare) {console.log(compare)})


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(Array.from(new Set(array)))
}

removeDuplicates([1,2,3,1,2,3,4,4,5,6,7,7,7,7], function(x) {console.log(x)})