function getFirst<ElementType>(arr: ElementType[]) {
    return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirst(numbers);

console.log(firstNum);

const words = ['bird', 'cat'];
const firstWord = getFirst(words);

console.log(firstWord);

const map = new Map<string, number>();
map.set("adfs", 234);

const adjacencyList = new Map<string, string[]>();
adjacencyList.set("b", ["a", 'c']);

const defaultTypedMap = new Map([["str", 234]]);
// TS infers that this map is of <string, number> type

type ApiResponse<Data> = {
    data: Data,
    statusCode: number
};

const countryApiResponse: ApiResponse<{ name: string, index: number}> = {
    data: { name: 'India', index: 1},
    statusCode: 200
}

type User = {
    name: string,
    age: number
}

const userApiResponse: ApiResponse<User> = {
    data: {
        name: 'Ram',
        age: 20
    },
    statusCode: 200
}

type ApiResponse2<Data = { userId: number }> = {        // default value of generic parameter
    data: Data,
    statusCode: number
}

// use default generic value
const loggedInUser: ApiResponse2 = {
    data: {
        userId: 20
    },
    statusCode: 404
};

// override default generic parameter value
const newUser: ApiResponse2<{ username: string, password: string }> = {
    data: {
        username: 'user1',
        password: 'user123'
    },
    statusCode:201
}

type ApiResponse3<Data extends object> = {
    data: Data,
    isError: boolean
};

const response: ApiResponse3<{value: number[], statusCode: number}> = {
    data: {
        value: [1, 2, 3],
        statusCode: 200
    },
    isError: false
}

// this wont be allowed
// const response2: ApiResponse3<string> = {
//     data: "sdf",
//     isError: true
// }
