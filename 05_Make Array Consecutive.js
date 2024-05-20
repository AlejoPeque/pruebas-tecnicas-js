// Difficulty: Easy

// Problem: Ratiorg received statues of different sizes as a gift from CodeMaster for his birthday. He likes things to be perfect, so he wants to arrange them from smallest to largest, with each statue being exactly 1 unit bigger than the previous one. He might need some additional statues to achieve this. Help him calculate the minimum number of additional statues needed.

// Resolve

function makeArrayConsecutive2(statues) {
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3