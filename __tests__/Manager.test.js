const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("That get role is being saved properly", () => {
    const managerNew = new Manager("manager name", 3, "email@dummy.com", 10);
    expect(managerNew.getRole()).toEqual("Manager");
  });
  it("That get office number is getting a number", () => {
    const managerNew = new Manager("manager name", 3, "email@dummy.com", 10);
    expect(managerNew.getOfficeNumber()).toEqual(10);
  });
});
