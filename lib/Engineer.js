// Link to the employee class
const employee = require("./Employee");
// Engineer class constructor function that returns the properties
class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    if (!github) {
      throw new Error("Missing GitHub username: GitHub username is required.");
    }
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = engineer;
