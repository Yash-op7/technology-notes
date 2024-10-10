- $ `tsc --init`

- properties of tsconfig.json
    - `target`: specifies the version of js that the ts compiler is going to generate or transpile the ts to. default is es2016 which is a standard implemented in all browsers, a higher target often results in shorter, more concise transpiled code.
    - `rootDir` the directory that contains our source paths, you can change it to the dir of index.ts
    - `outDir:` dir which will contain our js files, uncomment and change it to './dist' or distributable folder
    - `removeComments` set this to true so that the generated js code will be shorter
    - `noEmitOnError`: always good to enable this, it prevents generation of js files when there are ts errors.
    - `module: commonjs`

- to compile all ts files in the folder: run `tsc`;