const fs = require("fs");

const genders = ["M", "F"];

const maleNames = [
  "Luke",
  "James",
  "Haris",
  "Kyle",
  "Liam",
  "Lukas",
  "Eddie",
  "Charlie",
  "Robin",
  "Owen",
];
const femaleNames = [
  "Daisy",
  "Harley",
  "Maria",
  "Natalie",
  "Samantha",
  "Eve",
  "Lillie",
  "Susan",
  "Betty",
  "Phoebe",
];
const lastNames = [
  "Bull",
  "Whittaker",
  "Rees",
  "Peters",
  "Goodwin",
  "Rawlings",
  "Butler",
  "Ward",
  "Cross",
  "Carlson",
];

const randChoice = (arr) => {
  const randomElement = Math.floor(Math.random() * arr.length);
  return randomElement;
};

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  const gender = genders[randChoice(genders)];
  person.gender = gender;
  if (gender === "M") {
    person.name = maleNames[randChoice(maleNames)];
  } else {
    person.name = femaleNames[randChoice(femaleNames)];
  }
  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  person.age = Math.floor(Math.random() * (87 - 18 + 1)) + 18;
  people.push(person);
}

console.log(people);

const data = JSON.stringify(people);

fs.writeFile("people.json", data, (err) => {
  if (err) throw console.log("Something went wrong");
  console.log("File has been successfully generated! Check people.json");
});
