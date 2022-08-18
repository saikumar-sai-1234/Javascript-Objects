const person = {
    firstName: "Sai",
    lastName: "Kumar",
    id: 1234,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

