const { isEmpty, validateGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("validations tests suites - validateGamerTag", () => {
    test("should return false as there are not at least 8 characters", () => {
        const result = validateGamerTag("Gamer");
        expect(result).toBe(false);
    });

    



    
});