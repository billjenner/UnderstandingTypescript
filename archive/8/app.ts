let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}


const add2 = (a: number, b: number) => {
  return a + b;
}

// implicit return
const add4 = (a: number, b: number = 1) => a + b;

// anonymous function
if (button) {
  button.addEventListener('click', event => console.log(event));
}


// spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
  name2: 'Bill',
  age: 30
}
const copiedPerson = { ...person };

// rest parameters
const add5 = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => { return curResult + curValue}, 0);
}
const addedNumbers = add5(5, 10, 15);

// Array & Object Destructuring
const hobbies2 = ["Sports", "Cooking"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies2;
const {name2, age} = person;
