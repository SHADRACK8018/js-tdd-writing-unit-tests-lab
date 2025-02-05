// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
    // Basic palindrome check
    test('returns true for a palindrome word', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('returns false for a non-palindrome word', () => {
        expect(isPalindrome('car')).toBe(false);
    });

    // Case insensitivity check
    test('returns true for palindrome with mixed case', () => {
        expect(isPalindrome('Madam')).toBe(true);
    });

    // Edge case for an empty string
    test('returns false for an empty string', () => {
        expect(isPalindrome('')).toBe(false);
    });

    // Non-alphabetic character check
    test('throws error for a word with non-alphabetic characters', () => {
        expect(() => isPalindrome('abc123')).toThrow();
    });

    // Non-string input check
    test('throws error if input is not a string', () => {
        expect(() => isPalindrome(123)).toThrow();
    });
});