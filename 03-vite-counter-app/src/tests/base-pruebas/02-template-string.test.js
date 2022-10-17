import { getSaludo } from "../../base-pruebas/02-template-string";

describe('02-template-string test', () => { 
    test('getSaludo should return "Hola Fernando"', () => { 
        const name = 'Fernando'
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
     })
 })