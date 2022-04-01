const person = {
    userName: 'John',
    lastName: 'Doe',
    age: 34,
    address: {
        city: 'CDMX',
        zip: 235432,
        lat: 14.34533,
        lng: 64.24464
    }
}
// This will print in cosole the object as usual
console.log(person);
// This will print the object in table format
console.table(person);
// Attempting to store the 'person' object in a new one
// and then overide this new object to keep the original values intact
const person2 = person;
person2.lastName = 'Smith';

console.log(person.lastName);
console.log(person2.lastName);
// Output:
// 'Smith'
// 'Smith'

// The original object will be override sinse it is using memory space
// no matter we change the new one. We need to implement the spread '...'
// in order to clone the original object into a new one

const person3 = {...person};
person3.lastName= 'Parker';
console.log(person.lastName);
console.log(person2.lastName);
console.log(person3.lastName);

// Output:
// 'Smith'
// 'Smith'
// 'Parker'