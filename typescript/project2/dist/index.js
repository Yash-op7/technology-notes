"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balls = void 0;
// Basic Types
let id = 5;
let company = "Leetcode";
let isPublished = true;
let x = "Hwl";
x = true;
// Arrays
let nums = [1, 2, 3, 4];
// Tuple
let person = [1, "s", true];
// Tuple Array
let employee;
employee = [
    [1, "bob"],
    [2, "bill"],
];
// Union
let pid;
pid = 22;
pid = "22";
// Enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
console.log(Directions.Up); // 0
// Objects
const user = {
    id: 2,
    name: 'bob'
};
const user2 = {
    id: 3,
    name: 'tom'
};
// Type Assertion - explicitly telling the compiler that we want to treat an entity as a different type
let cid = 1;
let customerId = cid; // or
let customerId2 = cid;
let customerId3 = cid; // by def customerId3 is set to any
// Functions
function add(x, y) {
    return x + y;
}
// return type can be void
function log(message) {
    console.log(message);
}
exports.balls = 1;
