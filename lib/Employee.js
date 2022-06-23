// Parent class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  // Will return what type of role the employee will be doing
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
