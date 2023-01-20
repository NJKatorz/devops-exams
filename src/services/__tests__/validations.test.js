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

    test("should return true as there are at least 8 characters", () => {
        const result = validateGamerTag("TheGamer");
        expect(result).toBe(true);
    });

    test("should return true as there are at least one special character", () => {
        const result = validateGamerTag("Gamer.Fr");
        expect(result).toBe(true);
    });

    test("should return true as there are at least one number", () => {
        const result = validateGamerTag("Gamer2Fr");
        expect(result).toBe(true);
    });

   


    
});