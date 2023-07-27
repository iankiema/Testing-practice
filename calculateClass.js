class Calculator {
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }

    multiply(a, b) {
      return a * b;
    }
  }

  // Tests for Calculator methods
  describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
      calculator = new Calculator();
    });

    describe("add method", () => {
      test("should add two numbers correctly", () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
        expect(calculator.add(0, 0)).toBe(0);
      });
    });

    describe("subtract method", () => {
      test("should subtract two numbers correctly", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(1, -1)).toBe(2);
        expect(calculator.subtract(0, 0)).toBe(0);
      });
    });

    describe("divide method", () => {
      test("should divide two numbers correctly", () => {
        expect(calculator.divide(6, 2)).toBe(3);
        expect(calculator.divide(10, -2)).toBe(-5);
        expect(calculator.divide(1, 1)).toBe(1);
      });

      test("should throw an error when dividing by zero", () => {
        expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero.");
      });
    });

    describe("multiply method", () => {
      test("should multiply two numbers correctly", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, 1)).toBe(-1);
        expect(calculator.multiply(0, 5)).toBe(0);
      });
    });
  });
