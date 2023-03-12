const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the intern school", () => {
      const intern = new Intern("John", 123, "john@test.com", "UCLA");
      expect(intern.getSchool()).toEqual("UCLA");
    });
  });

  describe("getRole", () => {
    it("should return the Intern role", () => {
      const intern = new Intern("John", 123, "john@test.com", "UCLA");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
