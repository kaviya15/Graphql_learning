 const usersList = [
  {
    id: 1,
    name: "A",
    age: 2,
    broken: false,
    friends: [
      { id: 2, name: "B", age: 12, broken: false },
      { id: 8, name: "H", age: 72, broken: false },
    ],
  },
  { id: 2, name: "B", age: 12, broken: false },
  { id: 3, name: "me", age: 22, broken: true },
  { id: 4, name: "D", age: 32, broken: false },
  { id: 5, name: "E", age: 42, broken: false },
  {
    id: 6,
    name: "F",
    age: 52,
    broken: false,
    friends: [
      { id: 3, name: "me", age: 22, broken: true },
      { id: 8, name: "H", age: 72, broken: false },
    ],
  },
  { id: 7, name: "G", age: 62, broken: false, friends: [] },
  {
    id: 8,
    name: "H",
    age: 72,
    broken: false,
    friends: [
      { id: 3, name: "me", age: 22, broken: true },
      { id: 8, name: "H", age: 72, broken: false },
    ],
  },
  { id: 9, name: "I", age: 82, broken: false },
];

 const companies = [
  { name: "AVRL", founded: 2017, location: "Texas" },
  { name: "Capgemini", founded: 1990, location: "France" },
  { name: "Zoho", founded: 1997, location: "Chennai" },
  { name: "Mercedez Benz", founded: 1968, location: "Germany" },
];
module.exports = {usersList,companies}