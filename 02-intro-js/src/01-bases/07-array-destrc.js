const dbzCharacters = ['Goku', 'Vegeta', 'Trunks']

// Regular way to acces the elements
console.log(dbzCharacters[0]);
// Output: 'Goku'
console.log(dbzCharacters[1]);
// Output: 'Vegeta'
console.log(dbzCharacters[2]);
// Output: 'Trunks'

// Destructuring Mode

// Using destructuring we will get all the elments we want based on the element position
// that we trying to get
const [pos1, pos2, pos3] = dbzCharacters;
console.log(pos1,pos2,pos3);
// Output: 'Goku Vegeta Trunks'

// We cans skip the positions in order to get only the specific element we want in the array
// to do this we will put a comma for each position we want to skip
const [, , thisIsTrunks] = dbzCharacters;
console.log(thisIsTrunks);
// Ouput: 'Trunks'
const [,thisIsVegeta] = dbzCharacters;
console.log(thisIsVegeta);
// Output: 'Vegeta'

// Same way we can apply this to functions that return an array
const returnMyArray = () => ['ABC', 123]
console.log(returnMyArray());
// Output: '[ "ABC", 123 ]'
const [letters, numbers] = returnMyArray();
console.log(numbers, letters);
// Output: '123 "ABC"'

// A more complex exmample where the array contain a function
const newArray = (value) => [value, ()=>{console.log("Hello friend...")}];
const [nombre, func] = newArray('Broly');
console.log(nombre);
func();