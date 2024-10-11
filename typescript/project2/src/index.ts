// Basic Types
let id: number = 5;
let company: string = "Leetcode";
let isPublished: boolean = true;

let x: any = "Hwl";
x = true;

// Arrays
let nums: number[] = [1, 2, 3, 4];

// Tuple
let person: [number, string, boolean] = [1, "s", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "bob"],
  [2, "bill"],
];

// Union
let pid: string | number;
pid = 22;
pid = "22";

// Enum
enum Directions {
    Up, Down, Left, Right
}
console.log(Directions.Up) // 0

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 2,
    name: 'bob'
}

// Type
type User = {
    id: number,
    name: string
}
const user2: User = {
    id:3,
    name: 'tom'
}

// Type Assertion - explicitly telling the compiler that we want to treat an entity as a different type
let cid: any = 1;
let customerId = <number>cid;   // or
let customerId2 = cid as number;
let customerId3 = cid;              // by def customerId3 is set to any

// Functions
function add(x: number, y: number): number {
    return x + y;
}
// return type can be void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces