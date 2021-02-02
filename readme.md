# Course Understanding Typescript

-[Academind Community](https://academind.com/community/)

-[Typescript](https://www.typescriptlang.org/)

-[TypeScript in Visual Studio Code](https://code.visualstudio.com/Docs/languages/typescript)

-[How To Work With TypeScript in Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-work-with-typescript-in-visual-studio-code)

-[How to debug TypeScript with VS Code](https://pkief.medium.com/how-to-debug-typescript-with-vs-code-9cec93b4ae56)

### Setup

Node.js

> npm init

> npm install --save-dev lite-server

> npm install typescript --save-dev

> tsc --version

> npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader

> npm install --save-dev clean-webpack-plugin

> npm install --save lodash

> npm install --save @types/lodash

> npm install --save axios

> npm install --save @types/axios

> npm install --save-dev @types/googlemaps

Global

> npm install -g typescript

Visual Studio Extentions

> Install-Package Microsoft.TypeScript.MSBuild
> VS Code ESLint extension
> Material Design Icons for Visual Studio Code
> Visual Studio Code plugin that autocompletes filenames
> Code formatter using prettier
> Debugger for Chrome

#### Congiture Typescript for project

> tsc

> tsc --version
> tsc filename.ts
> tsc filename.ts -watch

- (watch mode)

> tsc --init
>
> > message TS6071: Successfully created a tsconfig.json file.

- Tells typescript entire directory needs to be managed
- Then you can just run tsc in the future from the root

> Edit tsconfig.json > save

#### Rebuild a directory

> npm install
> Verify package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  }
```

> tsc -w (compile on auto-save)
> npm start (run lite-server)
> http://localhost:3000

#### Notes

- updated package.json > npm start > http://localhost:3000

- If need to rebuild node modules folder
  npm install

- '!' insurances we will always yield a value
  Example: const input1 = document.getElementById("num1")! as HTMLInputElement;

- '+' cast string to number
  Example: console.log(add(+input1.value, +input2.value));

- Always inport js instead of ts files
  Example: <script src="using-ts.js" defer></script>

- Core types

  - number

    ```
      myNum: number
      Add(+input1, +input2)
    ```

  - string (myStr: string)
  - boolean
  - object
  - Array (string[], boolean[], any[], etc..)
  - Tuple

    ```
      var mytuple = [10,"Hello"];
    ```

  - Enum

    ```
      enum Role3 {ADMIN = 5, READ_ONLY, AUTHOR};
    ```

  - Any (back to java script)

- Extra Types

  - Union

  ```
      input1: number | string
      if (typeof input1 === 'number') { do one way} else { do other way }
  ```

  - Literal

    ```
    resultConversion: 'as-number' | 'as-text'
    if (resultConversion === 'as-number')
    combine(10, 22, 'as-number')
    ```

- Custom Type

  ```
      type Combinable = number | string
      input1: Cominable
  ```

- unknown Type

  ```
      let userInput: Unknown
  ```

- never Type

  ```
    function generateError(message: string, code: number): never {
      throw { message: message, ErrorCode: code};
    }
    generateError('An error occured!', 500);
  ```

- Function Types - pointer and specific params & return type defined

  ```
  let combineValues: (a: number, b: number) => number;
  combineValues = add;
  ```

- Callback

  ```
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  addAndHandle(10, 20, () => {});
  ```

- var let & const

  - var keyword are scoped to the immediate function body (hence the function scope).
  - let variables are scoped to the immediate enclosing block.
  - const is a pointer.

- Arrow Functions

  ```
    const add2 = (a: number, b: number) => {
      return a + b;
    }

    // implicit return
    const add4 = (a: number, b: number) => a + b;

    // anonymous function
    if (button) {
      button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
    }
  ```

- default params

  ```
    const add4 = (a: number, b: number = 1) => a + b;
  ```

- Spread Operator (arrays & object key value pairs), Rest params

  ```
    // spread operator
    const hobbies = ["Sports", "Cooking"];
    const activeHobbies = ["Hiking"];
    activeHobbies.push(...hobbies);

    const person = {
      name: 'Bill',
      age: 30
    }
    const copiedPerson = { ...person };

    // rest parameters
    const add5 = (...numbers: number[]) => {
      numbers.reduce((curResult, curValue) => { return curResult + curValue}, 0);
    }
    const addedNumbers = add5(5, 10, 15);
  ```

- Array & Object Destructuring

  ```
    const hobbies2 = ["Sports", "Cooking"];
    const [hobby1, hobby2, ...remainingHobbies] = hobbies2;
    const {name, age} = person;
  ```

- Constructor shortcut

  ```
    constructor(private id: string, public name: string) {

    }
  ```

- Inheritance

  ```
    // Inheritance
    class ITDeparment extends Department {
      // default is base class constructor
    }
    const accounting2 = new ITDeparment('d1', 'Accounting');
    class ITDeparment2 extends Department {
      constructor(id: string, public admins: string[]) {
        super(id, 'Mark'); // Call base class constructor (before using this)
        this.admins = admins;
      }
    }
  ```

- Access properites

  - Applies to properties and methods
  - public | private | protected

- Getters & Setters

  ```
    class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
      return this.lastReport;
    }

    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  ```

- Static

  - Math object

  ```
    // declaring static members inside a class,
    //you cannot access them from non-static members
    // have to use
    static createEmployee(name: string) {
      return {name: name};
    }
    const employee1 = Department.createEmployee('Max');

    // have to use class name from inside class to access
    class Department {
      . . .
      console.log(Department.createEmployee);
      }
  ```

- Type Casting

  ```
      // never yield null as defined by '!'
      const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
      // React safe
      const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
  ```

- Nullish Coalescing

  ```
    const userInput = '';
    // Default is triggered by: NULL | Undefined | ''
    const storedData = userInput || 'DEFAULT';
    // Default is triggered by: NULL | Undefined
    const storedData = userInput ?? 'DEFAULT';
  ```

- Generics

  ```
    const names: Array<string> =[];
    names[0].split(' ');

    function merge<T, U>(objA: T, objB: U) {
      return Object.assign(objA, objB);
    }
  ```

- Decorators

  ```
    function Logger(constructor: Function) {
      console.log('Logging...');
      console.log(constructor);
    }

    @Logger
    class Person {
      name = 'Max';

      constructor() {
        console.log('Creating person object...');
      }
    }

    const pers = new Person();

    console.log(pers);
  ```

##### Compiler and configuration

- tsconfig.json options to include / exclude files

  ```
    //include / exclude files
    {
      . . .
    },
      "files": [
      "app.ts"
    ],
      "inlcude": [
      "app.ts"
    ],
    "exclude": [
      "node_moduiles",
      "archive"
    ]

    // es5 vs es6
    "target": "es6",

    // unlock dom api's (same as target es6 default)
    "lib": [
      "dom",
      "es6",
      "dom.iterable",
      "scripthost"
    ],

    // check existing js for syntax
    "checkJs": true,

    // sourceMap helps with browser debugging
    // creates map file that allow you to step into source from browser
    "sourceMap": true,

    // where to place output, useful for build dirs
    "outDir": "./dist"

    // where to look for source ts files
    "rootDir": "./src"

    // only turn on if you need detailed compile output
    "downlevelIteration": true,

    // problem files will not be generated
    "noEmitOnError": true,
  ```

##### Using Webpack and TypeScript

ts_loader will be used intead of babel

- tsconfig.json
  ```
    // not needed, webpack will override
    "rootDir": "./src"
    // make sure debugging is set
    "sourceMap": true,
  ```
- webpack.config.js
- package.json
  ```
    "start": "lite-server",
    "build": "webpack"
  ```

## Other Topics

npm run build
@types package to help TS & webpack understand vanila JS.
In the case @types package does not exist, use deplary as last resort.

```
  declar var GLOBAL: any;
```

### Project

> Google Geocoding API
> Get Started/Go to Console
> Maps + Places
> Create/Pick existing Project
> Setup Billing
> Get API Key

### References

- [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Debugging TypeScript](https://code.visualstudio.com/docs/typescript/typescript-debugging)
- [tsc CLI Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [Webpack Reference](https://webpack.js.org/concepts/)
- [Lodash](https://lodash.com/)
- [Lodash Types](https://www.npmjs.com/package/@types/lodash)
- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview)
- [Axios](https://github.com/axios/axios)

### Resources

### Additional Notes

### Class Reference

- [Understanding Typescript](https://www.udemy.com/course/understanding-typescript)

### Certificate

![Certificate](./images/certificate.png)

```

```
