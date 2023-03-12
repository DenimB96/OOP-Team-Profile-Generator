// Link to the employee class
const employee = require("./Employee");
// Intern class constructor function that returns the properties
class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = intern;
