import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

getUser

describe('Test 05-funciones', () => { 
    test('getUser should return an object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect(testUser).toEqual(user);
    })

    test('getUsarioActivo return the given name', () => {
        const userName = 'John Doe';
        const userObject = {
            uid: 'ABC567',
            username: userName
        }

        const userTest = getUsuarioActivo(userName);

        expect(userObject).toEqual(userTest);

    });
 })