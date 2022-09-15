import { getAllByText, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('pruebas en AppRouter.jsx', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {

            logged: false
        }

        render(

            <MemoryRouter initialEntries={ ['/marvel'] }>

                <AuthContext.Provider value={ { contextValue } }>

                    <AppRouter/>

                </AuthContext.Provider>

            </MemoryRouter>

        );

        screen.debug();

        expect( screen.getByText('Login') ).toBeTruthy(); // no funcionaria si el button Entrar se llamara Login tambien
        // expect( screen.getAllByText('Login').length ).toBe(1); // toBe(2) funciona incluso si el h1 y el boton tienen el mismo nombre Login
    });

    test('debe mostrar el componente de marvel si esta autenticado', () => {

        const contextValue = {

            logged: true,
            user: {

                name: 'SilverMoon',
                id: 'ABC95'
            }

        }

        render(

            <MemoryRouter initialEntries={['/login']}>

                <AuthContext.Provider value={ contextValue }>

                    <AppRouter/>

                </AuthContext.Provider>

            </MemoryRouter>

        );

        screen.debug();

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1); // marvel tiene que aparecer mas de 1 vez

    });
});

// pruebas en el AppRouter https://www.udemy.com/course/react-cero-experto/learn/lecture/29491138#questions
