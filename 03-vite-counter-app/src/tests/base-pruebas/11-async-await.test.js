import { getImagen } from "../../base-pruebas/11-async-await";

describe('Testing 11-async-await', () => {
    test('getImage should return a url', async() => {
        const url = await getImagen();
        console.log(`Hey LISTEN! 🤖 ==> ${url}`);

        expect(typeof url).toBe('string');
    });

    // test('getImage should return error if image is not found', async() => {
        
    // });
});