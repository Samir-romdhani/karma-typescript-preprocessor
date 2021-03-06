/// <reference path="src/person.ts"/>

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

describe("A suite", () => {
    it("contains spec with an expectation", () => {
        const foo = { bar: 'foo.bar' };
        const s = `${foo.bar}.blabla`;
        console.log(s);
        expect(true).toBe(true);
    });
    it("greeter", () => {
      var user = {firstname: "Jane", lastname: "User"};
      console.log(greeter(user));
    });
});

describe("A suite is just a function", () => {
    var a: boolean;
    it("and so is a spec", () => {
        a = true;
        expect(a).toBe(true);
    });
});
