const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("That get name is being saved properly", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    expect(employeeNew.getName()).toEqual("employee name");
  });
  it("That id is getting a number", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    // syntax to take any number
    expect(employeeNew.getId()).toEqual(expect.any(Number));
  });
  it("That email is getting an email", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    expect(employeeNew.getEmail()).toEqual("email@dummy.com");
  });
  it("will return the role of employee ", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    expect(employeeNew.getRole()).toEqual("Employee");
  });
});
