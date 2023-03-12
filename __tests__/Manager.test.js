const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should return Manager as a role", () => {
      const manager = new Manager();
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("officeNumber", () => {
    it("should set office number via constructor argument", () => {
      const officeNumber = 123;
      const manager = new Manager("John", 1, "john@company.com", officeNumber);
      expect(manager.officeNumber).toBe(officeNumber);
    });

    it("should get office number via getOfficeNumber()", () => {
      const officeNumber = 123;
      const manager = new Manager("John", 1, "john@company.com", officeNumber);
      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
  });
});
