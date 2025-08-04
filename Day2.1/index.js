let myName = window.prompt("Enter name");
let birth = window.prompt("Enter birth year");
let isStudent = window.confirm("are you student");
let age = new Date().getFullYear() - birth;
 document.getElementById("display").innerHTML = `hello ${myName}, you are ${age} years old`;
if (age < 13) {
  console.log("Kid");
  window.alert("Kid");
  document.getElementById("display").innerHTML += `<br>Category: kid`;
}else if(age >=13 && age <=59){
    console.log("Adult");
  window.alert("Adult");
 document.getElementById("display").innerHTML += `<br>Category: adult`;
}else{
     console.log("senior");
  window.alert("senior");
 document.getElementById("display").innerHTML += `<br>Category: senior`;
}
 document.getElementById("display").innerHTML += `<br>Don't forget to study hard!
`;
