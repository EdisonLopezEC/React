import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('Retorna un objeto', () => {
        
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual(userTest);

    })
    
    //getUsuarioActivo debe retornar un objeto
    test('UsuarioActivo retorna un objeto', () => {
        
        const { username }= getUsuarioActivo('Carlos');

        const userTest={
            uid: 'ABC567',
            username: username
        }
        
        const user = getUsuarioActivo('Carlos')
        expect( user ).toEqual(userTest);

    })
    


})