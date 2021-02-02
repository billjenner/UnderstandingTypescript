function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // console.log(typeof number1);
  // if (typeof n1 == 'number' && n2 === 'number') {
  //   throw new Error('Incorrect Input');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase= 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

function generateError(message: string, code: number): never {
  throw { message: message, ErrorCode: code};
}
generateError('An error occured!', 500);
