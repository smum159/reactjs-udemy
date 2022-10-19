import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('testing 09-promesas', () => {
    test('getHeroeByIdAsync should return a hero', (done) => { 
         const id = 1;
         const heroTest = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
         getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual(heroTest);
            done();
         })
     })

     test('getHeroeByIdAsync should return a error if the hero dont exists', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`);
           done();
        })
    })
});