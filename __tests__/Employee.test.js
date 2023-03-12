const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual("john@example.com");
    });
  });

  describe("getName", () => {
    it("should return the employee's name", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getName()).toEqual("John");
    });
  });

  describe("getId", () => {
    it("should return the employee's id", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getId()).toEqual(123);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email address", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getEmail()).toEqual("john@example.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
