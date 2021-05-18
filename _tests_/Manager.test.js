const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const manager = new Manager(1,"German Ramirez","german@german.com",23);
describe("Manager class", () => {
    
    it("Create an Instance of Manager and check if extend of Employee Class", () => {    
        expect(manager).toBeInstanceOf(Employee);
    });
    
    describe("getRole ", () => {
        it("returns Manager if is correct", () => {
            expect(manager.getRole()).toBe("Manager");
        });
    });

    describe("getName ", () => {
        it("returns German Ramirez if is correct", () => {
            expect(manager.getName()).toBe("German Ramirez");
        });
    });

    describe("getEmail ", () => {
        it("returns german.com if is correct", () => {
            expect(manager.getEmail()).toBe("german@german.com");
        });
        it("returns german.com if is correct", () => {
            expect(manager.getEmail()).not.toBe(0);("german1@german.com");
        });
    });


    describe("getId ", () => {
        it("returns 1 if is correct", () => {
            expect(manager.getId()).toBe(1);
        });
        it("returns false if is correct", () => {
            expect(manager.getId()).not.toBe(0);
        });        
    });
});