// Difficulty: Easy

// Problem: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Resolve
function solution(inputString) {
    let isPalindrome = true;
    let i = 0;
    let j = inputString.length - 1;
    while (i < j) {
        if (inputString[i] !== inputString[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;
}

console.log(solution("abba"));