// Difficulty: Easy

// Problem: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Resolve
function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > max) {
            max = product;
        }
    }
    return max;
}

let inputArray = [3, 6, -2, -5, 7, 3];

console.log(adjacentElementsProduct(inputArray)); // 21