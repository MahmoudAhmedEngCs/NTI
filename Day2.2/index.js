let myName = window.prompt("Enter name");
let age = +window.prompt("Enter age");
let experience = +window.prompt("years of experience");
let rating = +window.prompt("yur rating from 1 to 10");
let baseSalary = +prompt("Enter your base salary:");
if (isNaN(age) || isNaN(experience) || isNaN(baseSalary)) {
  alert("Please enter valid numeric values.");
}
document.getElementById(
  "display"
).innerHTML = `hello ${myName}, you are ${age} years old`;
///////////////////////////////
let level = "";
if (experience < 2) {
  level = "Junior";
} else if (experience >= 2 && experience <= 5) {
  level = "Mid-Level";
} else if (experience > 5 && experience <= 10) {
  level = "Senior";
} else {
  level = "Expert";
}
console.log(level);
window.alert(level);
document.getElementById("display").innerHTML += `<br>${level}`;
////////////////////////////////
let message;
switch (true) {
  case rating >= 9:
    message = "Excellent";
    break;
  case rating >= 7 && rating <= 8:
    message = "Good";
    break;
  case rating >= 5 && rating <= 6:
    message = "Average";
    break;
  case rating < 5:
    message = "Needs Improvement";
    break;
  default:
    message = "Invalid rating";
}
console.log(`Your performance is: ${message}`);
///////////////////

let bonusPercentage = 0;

if (experience >= 0 && experience <= 2) {
  bonusPercentage = 0.1;
} else if (experience >= 3 && experience <= 5) {
  bonusPercentage = 0.15;
} else if (experience > 5) {
  bonusPercentage = 0.2;
}

let bonus = baseSalary * bonusPercentage;
let finalSalary = baseSalary + bonus;

console.log(`Final Salary: ${finalSalary}`);

alert(`Your Final Salary is: ${finalSalary}`);
document.getElementById("display").innerHTML += `
<br>Final Salary: ${finalSalary}
`;
