const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("That get name is being saved properly", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    expect(employeeNew.getName()).toEqual("employee name");
  });
  it("That id is getting a number", () => {
    const employeeNew = new Employee("employee name", 3, "email@dummy.com");
    expect(employeeNew.getId()).toEqual(3);
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
// can i create an instance of a class - should be of type object

// can i set the name on the employee class using constructor

// can i set id

// can i set email

// does getname work

// does get id work

// does get email work

//does get role work
