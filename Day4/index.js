// Task1
function multiply(a, b) {
  return a * b;
}
function calculate(x, y, fun) {
  return fun(x, y);
}
function displayResult(result) {
  console.log(`The result is: ${result}`);
}
const result = calculate(5, 2, multiply);
displayResult(result);
//Task2
setTimeout(function getUser() {
  console.log("Hello, User!");
}, 3000);
let count = 10;
let sec = 5;
const id = setInterval(function countDown() {
  console.log(count);
  count--;
  sec--;
  if (count == 5) {
    clearInterval(id);
  }
  if (count == 0) {
    console.log("Time's up!");
  }
}, 1000);
const timeout = setTimeout(() => {
  console.log("This will be cleared!");
}, 5000);

clearTimeout(timeout);

