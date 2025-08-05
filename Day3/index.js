// Task1
let array = [1, 3, -7, -3, 4, 9, 14, 13, -19, 5];
let sumPos = 0;
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  if (array[i] < 0) {
    continue; // تخطي الأرقام السالبة
  }
  sumPos += array[i];
}

console.log(`Sum of positive numbers: ${sumPos}`);
console.log(`Sum of all numbers: ${sum}`);

array.push(18);
array.shift();
/////////////////////////

// Task2
let student = {
  sName: "Mahmoud",
  age: 19,
  grade: "good",
  isGraduated: false,
};

console.log(`student name: ${student.sName} | age:${student.age}`);
student.grade = "very good";
console.log(Object.keys(student));
console.log(Object.values(student));
student.email = "e@gmail.com";
delete student.isGraduated;
//////////////////

// Task3
let students = [
  { sName: "Mahmoud", age: 19, grade: "Good", isGraduated: false },
  { sName: "Sara", age: 21, grade: "Very Good", isGraduated: true },
  { sName: "Omar", age: 20, grade: "Excellent", isGraduated: false },
];

let totalAge = 0;
let totalGraduated = 0;
let totalNGraduated = 0;

students.forEach((student, index) => {
  totalAge += student.age;
  if (student.isGraduated) {
    totalGraduated++;
  } else {
    totalNGraduated++;
  }

  console.log(`Student ${index + 1}:`);
  console.log("Keys:", Object.keys(student));
  console.log("Values:", Object.values(student));
});

let newStudent = {
  sName: "Osama",
  age: 30,
  grade: "Good",
  isGraduated: true,
  email: "osama@example.com",
};

students.push(newStudent);

totalAge += newStudent.age;
if (newStudent.isGraduated) {
  totalGraduated++;
} else {
  totalNGraduated++;
}

console.log(students);
console.log(`Average Age: ${totalAge / students.length}`);
console.log(`Graduated Students: ${totalGraduated}`);
console.log(`Not Graduated Students: ${totalNGraduated}`);
