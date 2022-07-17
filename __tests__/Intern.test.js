const Intern = require("../lib/Intern");

const intern = new Intern("Matt", 1, "dummy@email.com", "SchoolName");

describe("Intern name", () => {
  it("returns the name", () => {
    expect(intern.getName()).toEqual("Matt");
  });
});

describe("Intern ID", () => {
  it("returns the ID of the intern", () => {
    expect(intern.getId()).toEqual(expect.any(Number));
  });
});

describe("Intern email", () => {
  it("returns the email of the intern", () => {
    expect(intern.getEmail()).toEqual("dummy@email.com");
  });
});

describe("Intern school", () => {
  it("returns the school of the intern", () => {
    //     expect(intern.getSchool()).toEqual("SchoolName");
    //   });
    expect(intern.getSchool()).toEqual("SchoolName");
  });
});

describe("Intern role", () => {
  it("returns the role of the intern", () => {
    expect(intern.getRole()).toEqual("Intern");
  });
});

// npm run test
