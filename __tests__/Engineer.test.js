const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github if provided valid arguments", () => {
      const engineer = new Engineer(
        "John",
        123,
        "john@test.com",
        "john-github"
      );
      expect(engineer.name).toEqual("John");
      expect(engineer.id).toEqual(123);
      expect(engineer.email).toEqual("john@test.com");
      expect(engineer.github).toEqual("john-github");
    });

    it("should throw an error if provided no arguments for github", () => {
      const cb = () => new Engineer("John", 123, "john@test.com");
      expect(cb).toThrowError(
        "Missing GitHub username: GitHub username is required."
      );
    });
  });

  describe("getGithub", () => {
    it("should return the engineer github username", () => {
      const engineer = new Engineer(
        "John",
        123,
        "john@test.com",
        "john-github"
      );
      expect(engineer.getGithub()).toEqual("john-github");
    });
  });

  describe("getRole", () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer(
        "John",
        123,
        "john@test.com",
        "john-github"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
