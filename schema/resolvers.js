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
  { id: 7, name: "G", age: 62, broken: false ,friends:[]},
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

module.exports = {
  Query: {
    users() {
      return usersList;
    },
    singleUser(parent,args){
        console.log(
          "Args",
          args,
          usersList.filter((data) => data.id == Number(args.id))
        );
        return usersList.filter(data=> data.id == Number(args.id))
    }
  },

};
