
// Standard function using a parameter that will be returned
// along with a message
function greeting(name) {
    return `Hello Friend: ${name}`;
}

console.log(greeting('Pepe'));
// Outuput
//  'Hello Friend: Pepe'

// Leaving functions like that leave the function open to be overrided
// giving us a warning like this:
// " 'greeting' is a function.eslintno-func-assign "
// even so it let us run our code as usual but it leaving it open to break it
/*
greeting = 12;
console.log(greeting);
*/

// By using 'const' in a function like this it prevent us to override it
const greeting2 = function(name) {
    return `Hello Friend: ${name}`;
}
console.log(greeting2('Juan'));
// If we try to override and we try to run our code it will give us an error like this:
// " Uncaught TypeError: invalid assignment to const 'newGreeting' "
/*
greeting2 = 25;
*/

// Functions can be also implement as Arraw functions
const greeting3 = (user) => {
    return `Hello Friend: ${user}`;
}
console.log(greeting3('Luis'));
// If our function is simple having only a return we can simplify it by making it like this:
const greeting4 = (user) => `Hello Friend: ${user}`;
console.log(greeting4('Ana'));

// We have a simple return arrow function returning an object
const getUser = () => {
    return {
        uid: 123,
        user: 'Clara'
    }
}
console.log(getUser());
// Output
//  {
//     uid: 123,
//     user: 'Clara'
//  }

// Yet we since this is an object that needs bracers '{}' to work these can be
// interpreteded as the function bracers, so thi kind of arrow function can't
// be simplified
/*
const getUser2 = () => { uid: 123, user: 'Buddy' }
*/

// For this kind of cases we need to implement parentheses like this
const getUser3 = () => ({ uid: 123, user: 'Andy' })
console.log(getUser3());

// Another example
const getUsuario2 = (nombre) => ({
    uid:644,
    username:nombre
})

const usuario2 = getUsuario2('Fernanda');
console.log(usuario2);
