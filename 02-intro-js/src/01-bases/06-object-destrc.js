const person = {
    user: 'Peter',
    code: 'Spidy',
    age: 34,
    city: 'NY',
    address: {
        city: 'CDMX',
        zip: 235432,
        lat: 14.34533,
        lng: 64.24464
    }
}

// Here we extract the property we want from an object
// variables names must match with the porperties names
const { code } = person
console.log(code);
// Output
//   'Spidy'

// Here we extract the property from an object and assign it into a new variable name
// this will leave the original name unavailable
const {code : condeName} = person
console.log(condeName);
// Output
//   'Spidy'

// We can extract several properties at once, no need to do it in the same order
const {user, age, city} = person
console.log(user,age,city);
// Output
//   'Peter 34 NY'


// Similar example but in a arrow function
const printPerson = (person) => {
    console.log('Peson data is: ', person);
    const {age, user, code} = person
    console.log('Person properties extracted:',code,user,age);
}
printPerson(person);
// Output
//   Peson data is:  
//  { user: "Peter", code: "Spidy", age: 34, city: "NY", address: {…} }
//  Person properties extracted: Spidy Peter 34

// In a similar way we can give an object to a function and estract especific
// values from that object. Notice that the values are wrapped into brackets
// at the same if we need we can add default values in case our object doen't
// had the needed properties
const printPerson2 = ({user, age, city, type = "Super"}) => {
    console.log('Person properties extracted:',city,user,age,type)
}
printPerson2(person);
// Output
//  Person properties extracted: NY Peter 34 Super

// If we use a function that returns another object we can extract either
// the object o properties of the same object
const newSuper = ({user, code, type = "Super"}) => {

    return {
        nombre: user,
        alias: code,
        tipo: type,
        direccion: {
            ciudad: 'CDMX',
            cp: 235432
        }
    }
}
// full object
const superHero = newSuper(person);
// object properties and child object
const {nombre, alias, direccion} = newSuper(person);
// child object properties
const { direccion:{ciudad, cp} } = newSuper(person);
console.log(superHero, nombre, alias, direccion, ciudad, cp);
// Output
//  { nombre: "Peter", alias: "Spidy", tipo: "Super", direccion: {…} }
//  Peter Spidy  { ciudad: "CDMX", cp: 235432 }
//  CDMX 235432

