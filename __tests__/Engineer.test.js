const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "engineer test name",
  1,
  "dummy@email.com",
  "githubuser"
);

describe("Engineer name", () => {
  it("returns the name of the engineer", () => {
    expect(engineer.name).toEqual("engineer test name");
    expect(engineer.getName()).toEqual("engineer test name");
  });
});

describe("Engineer ID", () => {
  it("returns the ID of the engineer", () => {
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.getId()).toEqual(expect.any(Number));
  });
});

describe("engineer email", () => {
  it("returns the email of the engineer", () => {
    expect(engineer.email).toEqual("dummy@email.com");
    expect(engineer.getEmail()).toEqual("dummy@email.com");
  });
});

describe("Github User", () => {
  it("returns the github for the engineer", () => {
    expect(engineer.github).toEqual("githubuser");
    expect(engineer.getGithub()).toEqual("githubuser");
  });
});

describe("Engineer role", () => {
  it("returns the role of the engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});

// npm run test to test
