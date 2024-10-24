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
const defaultTypedMap = new Map([["str", 234]]);
const countryApiResponse = {
    data: { name: 'India', index: 1 },
    statusCode: 200
};
const userApiResponse = {
    data: {
        name: 'Ram',
        age: 20
    },
    statusCode: 200
};
// use default generic value
const loggedInUser = {
    data: {
        userId: 20
    },
    statusCode: 404
};
// override default generic parameter value
const newUser = {
    data: {
        username: 'user1',
        password: 'user123'
    },
    statusCode: 201
};
const response = {
    data: {
        value: [1, 2, 3],
        statusCode: 200
    },
    isError: false
};
// this wont be allowed
// const response2: ApiResponse3<string> = {
//     data: "sdf",
//     isError: true
// }
