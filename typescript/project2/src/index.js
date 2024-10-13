// Basic Types
var id = 5;
var company = "Leetcode";
var isPublished = true;
var x = "Hwl";
x = true;
// Arrays
var nums = [1, 2, 3, 4];
// Tuple
var person = [1, "s", true];
// Tuple Array
var employee;
employee = [
    [1, "bob"],
    [2, "bill"],
];
// Union
var pid;
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
var user = {
    id: 2,
    name: 'bob'
};
var user2 = {
    id: 3,
    name: 'tom'
};
// Type Assertion - explicitly telling the compiler that we want to treat an entity as a different type
var cid = 1;
var customerId = cid; // or
var customerId2 = cid;
var customerId3 = cid; // by def customerId3 is set to any
// Functions
function add(x, y) {
    return x + y;
}
// return type can be void
function log(message) {
    console.log(message);
}
