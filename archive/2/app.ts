// explicit delaration of an object
const person: { 
  name: string; 
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple declaration, length is enforced 
} = {
  name: 'Bill',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

let favoriteActivies: string[];
favoriteActivies = ['Sports'];

console.log(person.name);

// Can access any string extionsions
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}