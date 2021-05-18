const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const engineer = new Engineer(1,"German Ramirez","german@german.com","izaack89");
describe("Engineer class", () => {
    
    it("Create an Instance of Engineer and check if extend of Employee Class", () => {    
        expect(engineer).toBeInstanceOf(Employee);
    });
    
    describe("getRole ", () => {
        it("returns Engineer if is correct", () => {
            expect(engineer.getRole()).toBe("Engineer");
        });
    });

    describe("getGithub ", () => {
        it("returns izaack89 if is correct", () => {
            expect(engineer.getGithub()).toBe("izaack89");
        });
    });

    describe("getName ", () => {
        it("returns German Ramirez if is correct", () => {
            expect(engineer.getName()).toBe("German Ramirez");
        });
    });

    describe("getEmail ", () => {
        it("returns german.com if is correct", () => {
            expect(engineer.getEmail()).toBe("german@german.com");
        });
    });


    describe("getId ", () => {
        it("returns 1 if is correct", () => {
            expect(engineer.getId()).toBe(1);
        });
    });
});