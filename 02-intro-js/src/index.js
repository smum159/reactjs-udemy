
import { heroes } from "./data/heroes";

const getHeroById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}
console.log(getHeroById(3));

const getHeroByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner);
console.log(getHeroByOwner('Marvel'));
