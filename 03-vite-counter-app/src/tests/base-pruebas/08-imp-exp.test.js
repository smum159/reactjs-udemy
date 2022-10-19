import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";


describe('test 08-imp-exp', () => {
    test('It should get a hero by ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('It should return undefined if id dont exist', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('It should return a DC heroes object', () => {
        const owner = 'DC';
        const testDcHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ];
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(3);
        expect(heroes).toEqual(testDcHeroes);
    });

    test('It should return a Marvel heroes object', () => {
        const owner = 'Marvel';
        const testMarvelHeroes = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ];
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(2);
        expect(heroes).toEqual(testMarvelHeroes);
    });
});