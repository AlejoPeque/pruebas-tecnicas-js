// Difficulty: Easy

// Problem: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// Resolve

function shapeArea(n) {
    return n * n + (n - 1) * (n - 1);
}

console.log(shapeArea(4)); // 25

// Explanation:

//    x
//   xxx
//  xxxxx
// xxxxxxx <--- 4x4 = 16
// --------
//  xxxxx <--- (4-1) * (4-1) = 9
//   xxx
//    x