import { types } from "../../../src/auth"



describe('pruebas en types.js', () => {

    test('debe regresar types', () => {

        console.log( types ); // { login: '[Auth] Login', logout: '[Auth] Logout' }

        expect( types ).toEqual({
            
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });

    });
});

// pruebas en los types https://www.udemy.com/course/react-cero-experto/learn/lecture/32141044#questions
