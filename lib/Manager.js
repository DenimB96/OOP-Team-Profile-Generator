// Link to the employee class
const employee = require("./Employee");
// Manager class constructor function that returns the properties
class manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = manager;
