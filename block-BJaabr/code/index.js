// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(number) {
  return String(number);
}
convertToString();

// - Write a Function Expression
 const addNumbers = function convertToString(number) {
  return String(number);
};
addNumbers();

// - Write an Arrow Function without curly brackets (if possible)
 const trueNumbers = (number) => String(number);

// - Write an Arrow Function with curly brackets
 const number = (number) => {
  return String(number);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"
  "23"
/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
 function addOne(number){
   return number + 1;
 }
// - Write a Function Expression
const addOneNumber = function addOne(number){
  return number + 1;
}
// - Write an Arrow Function without curly brackets(if possible)
const addTw0Number = (number) => number + 1 ;
// - Write an Arrow Function with curly brackets
const addsingleNumber =  (number)=> {
  return number + 1;
}
// - Execute the function

// - Execute the function and store the return value in a variable.
  addOne(21);
// - What is the typeof returnValue
   number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(number){
  return number - 1;
}
// - Write a Function Expression
const substractOne = function subOne(number){
  return number - 1;
}
// - Write an Arrow Function without curly brackets(if possible)
const subTw0Number = (number) => number - 1 ;
// - Write an Arrow Function with curly brackets
const subsingleNumber =  (number)=> {
  return number - 1;
}
// - Execute the function
substractOne();
// - Execute the function and store the return value in a variable.
substractOne(40);
// - What is the typeof returnValue
  number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA,numB){
    return numA + numB;
}
// - Write a Function Expression
   const addNumberss = function sum(numA,numB){
    return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
const addTwoNumberss =(numA,numB) => numA + numB ;
    
// - Write an Arrow Function with curly brackets
const addsNumberss = (numA,numB) => {
  return numA + numB;
}
// - Execute the function
  sum();
// - Execute the function and store the return value in a variable
   sum(12,14);
// - What is the typeof returnValue
   number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
  function square(num){
    return num*num;
  }
// - Write a Function Expression
   const square = function square(num){
    return num*num;
  }
// - Write an Arrow Function without curly brackets(if possible)
 const square = (num) => num*num;
// - Write an Arrow Function with curly brackets
 const square = (num) =>{
    return num*num;
 }
// - Execute the function
  square();
// - Execute the function and store the return value in a variable
 square(5);
// - What is the typeof returnValue
  number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
  function isGreater(x,y){
  if(x > y) return true;
  if(x < y) return false;
}
// - Write a Function Expression
const isGreater = function isGreater(x,y){
  if(x > y) return true;
  if(x < y) return false;
}
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
const isGreater = (x,y) =>{
  if(x > y) return true;
  if(x < y) return false;
}
// - Execute the function
 isGreater();
// - Execute the function and store the return value in a variable
isGreater(12,14);
// - What is the typeof returnValue
 number
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function oddOrEven(num){
    if(num % 2 ===0) return even;
    if(num % 2 !==0) return odd;

 }
// - Write an anonymous Function Expression
const oddOrEven =    function(num){
  if(num % 2 ===0) return even;
  if(num % 2 !==0) return odd;

}
// - Write an named Function Expression
  const oddOrEven =  function oddOrEven(num){
  if(num % 2 ===0) return even;
  if(num % 2 !==0) return odd;

}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

// - Write an Arrow Function with curly brackets
const oddOrEven =  (num) =>{
  if(num % 2 ===0) return even;
  if(num % 2 !==0) return odd;

}
// - Execute the function
 oddOrEven();
// - Execute the function and store the return value in a variable
oddOrEven(4);
// - What is the typeof returnValue
 number