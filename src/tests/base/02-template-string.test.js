
import { getSaludo } from '../../base/02-template-string'

describe('Purebas en 02-template-string', ()=> {
    test('getSaludo debe retornar Hola Edison', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);
    })    

//get saludo debe retornar Hola Carlos! si no hay argumento en 

test('getSaludo retorna Hola Carlos si no paso params',()=>{
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos');
})

})