const Employee = require("../lib/Employee");

describe("Employee class", () => {

  it("getRole returns Employee", () => {
    expect(new Employee(1,"German Ramirez","german.german.com").getRole()).toBe("Employee");
  });
    
  it("getName should returns the Name of the Employee", () => {
    expect(new Employee(1,"German Ramirez","german.german.com").getName()).toBe("German Ramirez");
  });
    
  it("getId should returns the Id of the Employee", () => {
    expect(new Employee(1,"German Ramirez","german.german.com").getId()).toBe(1);
  });
    
  it("getEmail should returns the Email of the Employee", () => {
    expect(new Employee(1,"German Ramirez","german.german.com").getEmail()).toBe("german.german.com");
  });
});