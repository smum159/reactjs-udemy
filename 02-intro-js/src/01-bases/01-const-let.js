//This value can't be overrided
const userName = 'John'
// This value CAN be overrided and it last during the current scope
let userLastname = 'Smith'

console.log(userName, userLastname);
// Output:
//     'John Smith'

if (true) {
    // Now the 'let' value is been overided and it will last only
    // during the 'if' statement scope
    let userLastname = 'Doe'
    console.log(userName, userLastname);
    // Output:
    //  'John Doe'
}
// The 'let' value will return to his original value since
// the previous if statement has finished
console.log(userName, userLastname);
// Output:
//     'John Smith'