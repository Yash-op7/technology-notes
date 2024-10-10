- $ `tsc --init`

- properties of tsconfig.json
    - `target`: specifies the version of js that the ts compiler is going to generate or transpile the ts to. default is es2016 which is a standard implemented in all browsers, a higher target often results in shorter, more concise transpiled code.
    - `rootDir` the directory that contains our source paths, you can change it to the dir of index.ts
    - `outDir:` dir which will contain our js files, uncomment and change it to './dist' or distributable folder
    - `removeComments` set this to true so that the generated js code will be shorter
    - `noEmitOnError`: always good to enable this, it prevents generation of js files when there are ts errors.
    - `module: commonjs`
    - `noUnusedParameters`

- to compile all ts files in the folder: run `tsc`;

- how to debug ts code in vsc:
    - enable `sourceMap` in tsconfig.json, this property generates a sourceMap file which specifies how each line in our ts code maps to a generated line in js code, index.js.map, it is not for us to understand, it is for the debugger to understand.
    - when we add a breakpoint, from this point onwards our code executes line by line
    - go to vsc debugger click on create a launch.json file

# Fundamentals of TS:
TS extends JS's fundamental types like so:
![alt text](image.png)
- types can be inferred for primitive initializations such as number, string, boolean, but if you just declare and not initialize a variable it gets type `any`, so the compiler assumes that it can get any type of data, we can set it to a number and later reset it to a string, but this just forgets the mainmotive of using ts.
- avoid using `any` type
## arrays
- in js arrays can contain different types of elements, but in ts we declare the type of elements or set it to any, example of type annotating arrays:
`let numbers: number[] = [];`
## tuples
- a fixed length array where each element has a particular type, example:
`let user: [number, string] = [1, 'Yash'];`
- keep tuples limited to 2 values, a good practice
- there is a bug in ts which allows you to do user.push(3) basically append another value to the tuple without breaking
## enums
- a list of related constants
- examples the size of t-shirts as constants
![alt text](image-1.png)
- if you dont explicitly assign values then they become 0, 1, 2 and use PascalCase
- example, output is 2:
![alt text](image-2.png)
- note that if you declare your enums with a `const` keyword the compiler will generate more optimized js code.
![alt text](image-3.png)

## functions
```ts
function validateUser(inp: number): number {
    return NaN;
}
```
- the number of params should be exact, unlike js where we can provide more or less number of parameters
- you can make parameters optional by using `?` and provide default values like so:
```ts
function calc(income: number, taxRate?: number, year = 2022): number {
    return 23;
}
```
- if a value is undefined like in this case:
```ts
function f(x:number): number {
    if(x < 150) {
        return 20;
    }
    return 21;
}
f();
```
then x will be undefined