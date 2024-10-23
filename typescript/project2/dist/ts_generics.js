"use strict";
function getFirst(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirst(numbers);
console.log(firstNum);
const words = ['bird', 'cat'];
const firstWord = getFirst(words);
console.log(firstWord);
const map = new Map();
map.set("adfs", 234);
const adjacencyList = new Map();
adjacencyList.set("b", ["a", 'c']);
