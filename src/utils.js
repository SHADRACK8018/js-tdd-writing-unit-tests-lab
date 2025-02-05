// Your code here
function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }

    if (word === '') {
        return false; // Explicitly handle the empty string case
    }

    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must contain only alphabetic characters');
    }

    word = word.toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

module.exports = { isPalindrome };