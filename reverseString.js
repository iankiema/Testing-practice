// Function to reverse a string
function reverseString(string) {
    return string.split("").reverse().join("");
  }

  // Test for reverseString function
  describe("reverseString function", () => {
    test("should return the reversed string", () => {
      expect(reverseString("hello")).toBe("olleh");
      expect(reverseString("")).toBe("");
      expect(reverseString("racecar")).toBe("racecar");
      expect(reverseString("12345")).toBe("54321");
    });
  });
