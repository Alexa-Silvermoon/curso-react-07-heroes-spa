import { authReducer, types } from "../../../src/auth/";

describe('pruebas en authReducer.js', () => {

    test('debe retornar el estado por defecto', () => {

        const state = authReducer( { logged: false }, {} ); // {} es el action vacio
        expect( state ).toEqual( { logged: false } );

    });

    test('debe de llamar el login, autenticar y establecer el usuario', () => {

        const action = {

            type: types.login,
            payload: {

                name: 'alexander',
                id: '123'
            }
        }

        const state = authReducer( { logged: false}, action );
        expect( state ).toEqual({

            logged: true,
            user: action.payload
        });

    });

    test('debe de llamar el logout, borrar el nombre del usuario y logged en false ', () => {

        const state = {

            logged: true,
            user: { id: '123', name: 'Christian' }

        }

        const action = {

            type: types.logout

        }

        const newState = authReducer( state, action );
        // console.log( newState );

        expect( newState ).toEqual( { logged: false } );

    });

});

// pruebas es authReducer https://www.udemy.com/course/react-cero-experto/learn/lecture/19971804#questions
