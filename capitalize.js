// Function to capitalize the first character of a string
function capitalize(string) {
    if (typeof string !== "string" || string.length === 0) {
      throw new Error("Input must be a non-empty string.");
    }
    return string[0].toUpperCase() + string.slice(1);
  }

  // Test for capitalize function
  describe("capitalize function", () => {
    test("should capitalize the first character of the input string", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("world")).toBe("World");
      expect(capitalize("testing")).toBe("Testing");
    });

    test("should throw an error if the input is not a non-empty string", () => {
      expect(() => capitalize(123)).toThrow("Input must be a non-empty string.");
      expect(() => capitalize("")).toThrow("Input must be a non-empty string.");
      expect(() => capitalize(null)).toThrow("Input must be a non-empty string.");
    });
  });
