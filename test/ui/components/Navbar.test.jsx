import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext, authReducer, types } from "../../../src/auth"
import { Navbar } from "../../../src/ui"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), // desestructurar y exparsir todo lo que viene en la libreria
    useNavigate: () => mockedUseNavigate // pero solo se sobrescribira el useNavigate

}));

describe('pruebas en Navbar.jsx', () => {

    const contextValue = {

        logged: true,
        user: {

            name: 'SilverMoon',
            id: 'ABC95'
        },

        logout: jest.fn()

    }

    beforeEach( () => jest.clearAllMocks() ); // limpiar todos los mocks antes de ser usados

    test('debe mostrar el nombre del usuario logeado', () => {

        render(

            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter> {/* si ocupamos useNavigate, entonces debemos usar MemoryRouter */}

                    <Navbar/>

                </MemoryRouter>

            </AuthContext.Provider>

        );

        screen.debug();

        expect( screen.getByText('SilverMoon') ).toBeTruthy();

    });

    test('debe de llamar logout y navigate cuando se hace click en el boton salir', () => {

        render(

            <AuthContext.Provider value={ contextValue }> {/* logout: jest.fn() */}

                <MemoryRouter> {/* si ocupamos useNavigate, entonces debemos usar MemoryRouter */}

                    <Navbar/>

                </MemoryRouter>

            </AuthContext.Provider>

        );

        screen.debug();

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true} );

    });
});

// pruebas en Navbar https://www.udemy.com/course/react-cero-experto/learn/lecture/32142066#questions
