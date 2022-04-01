
const userName = 'John'
const userLastname = 'Smith'
//Using backticks ' ` ' character we can use plain variables as
// template strings 
let fullName = `${userName} ${userLastname}`

console.log(fullName);
// Output:
//     'John Smith'

fullName = `
${userName}
${userLastname}`

console.log(fullName);
// Output:
//     '
        // John 
        // Smith
        // '


function getGreeting(theName) {
    return `Hello Friend... ${theName}`
}
// Template strings can be used with functions as well
console.log(`This is the user greeting: ${getGreeting('Johnny')} !`);
// Output:
//     'This is the user greeting: Hello Friend... !'

