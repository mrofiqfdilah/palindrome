// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Reversing the string by:
    // 1. Splitting the string into an array of characters using split('')
    // 2. Reversing the array using reverse()
    // 3. Joining the reversed array back into a string using join('')
    const reversedStr = str.split('').reverse().join('');

    // Comparing the original string with the reversed string
    // If both are the same, then the string is a palindrome
    return str === reversedStr;
}

// Testing the isPalindrome function with two example strings
console.log(isPalindrome('iji'));  // Output: true, because 'iji' is a palindrome
console.log(isPalindrome('madam'));  // Output: true, because 'madam' is a palindrome
