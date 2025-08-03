/////////////////
let myName = "Mahmoud";
let age = 19;
let isTrue = true;
let n = null;
let ud; 

console.log(myName);
console.log(age);
console.log(isTrue);
console.log(n);
console.log(ud);
///////////////
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isTrue);
console.log(typeof n);
console.log(typeof ud);
let firstName = "Mahmoud";
let lastName = "Ahmed";
let fullNameNew = `${firstName} ${lastName}`;
console.log(fullNameNew);
/////////////////
let username = "Mahmoud";
let password = "Pass123213123";

if (username === "") {
  alert("Username is required");
} else if (password.length < 8) {
  alert("Password must be at least 8 characters");
} else {
  console.log("Username:", username);
  console.log("Password:", password);
}