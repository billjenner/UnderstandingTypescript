// explicit delaration of an object


const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role3 {ADMIN = 5, READ_ONLY, AUTHOR};

const person = {
  name: 'Bill',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  role2: ADMIN,
  role3: Role3.READ_ONLY
};

let favoriteActivies: string[];
favoriteActivies = ['Sports'];

console.log(person.name);

if (person.role2 === ADMIN) {
  console.log('Person is Admin')
}
// Can access any string extionsions
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}