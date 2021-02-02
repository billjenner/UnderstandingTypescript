function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult2(add(5,3));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(2, 11));

addAndHandle(10, 20, () => {});