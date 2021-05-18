const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const intern = new Intern(1,"German Ramirez","german@german.com","Tec de Monterrey");
describe("Intern class", () => {
    
    it("Create an Instance of Intern and check if extend of Employee Class", () => {    
        expect(intern).toBeInstanceOf(Employee);
    });
    
    describe("getRole ", () => {
        it("returns Intern if is correct", () => {
            expect(intern.getRole()).toBe("Intern");
        });
    });

    describe("getSchool ", () => {
        it("returns Tec de Monterrey if is correct", () => {
            expect(intern.getSchool()).toBe("Tec de Monterrey");
        });
    });

    describe("getName ", () => {
        it("returns German Ramirez if is correct", () => {
            expect(intern.getName()).toBe("German Ramirez");
        });
    });

    describe("getEmail ", () => {
        it("returns german.com if is correct", () => {
            expect(intern.getEmail()).toBe("german@german.com");
        });
    });


    describe("getId ", () => {
        it("returns 1 if is correct", () => {
            expect(intern.getId()).toBe(1);
        });
    });
});