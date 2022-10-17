import { retornaArreglo } from "../../base-pruebas/07-deses-arr";


describe('Test 07-deses-arr', () => {
    test('should return a string and a number in an array', () => {
        const [string, number] = retornaArreglo();
        expect(string).toBe('ABC');
        expect(typeof string).toBe('string');
        expect(string).toEqual(expect.any(String));
        expect(number).toBe(123);
        expect(typeof number).toBe('number');
    });
});