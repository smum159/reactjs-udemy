// Import specifying which part of the file want to take
/* import { heroes, owners } from "./data/heroes"; */

// Import where we take the default and the individual exports
import heroes, {owners} from "../data/heroes";

export const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}
// console.log(getHeroById(3));

export const getHeroByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);
// console.log(getHeroByOwner('Marvel'));

console.log('Heroes Owners are: ', owners);


