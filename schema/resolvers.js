const {usersList,companies} = require("../fakeData.js");

module.exports = {
  Query: {
    users() {
      return usersList;
    },
    singleUser(parent, args) {
      console.log(
        "Args",
        args,
        usersList.filter((data) => data.name == args.name)
      );
      return usersList.filter((data) => data.name == args.name);
    },
    companies() {
      return companies;
    },
    getSingleCompany(parent, args) {
      return companies.filter((value) => value.name == args.name)[0];
    },
  },
  user: {
    companies(){
      return companies;
    }
  },
};
