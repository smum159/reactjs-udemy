const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['Marve', 'DC'];

// We also can export the content of this file to make it default like this
export default heroes;

// We can export all at once on indivitual exports
/* export {heroes, owners}; /*/

// We can export all at once and specifying the default export
/* export { heroes as default, owners}; */