function stringLength(string) {
    return string.stringLength
}

//Test for stringLength function

describe("stringLength function", () => {
    it('should return the correct character count of the input string', () => {
        expect(stringLength('hello')).toBe(5);
        expect(stringLength('')).toBe(0);
        expect(stringLength('This is a test string')).toBe(23);
        expect(stringLength('0123456789')).toBe(10);
    });

    it('should throw an error if the string is not between 1 and 10 characters long', () => {
        expect(() => stringLength('')).toThrow('String length must be at least 1 character.');
        expect(() => stringLength('a'.repeat(11))).toThrow('String length cannot exceed 10 characters.')
    })
})

stringLength('hello')
