import { getByText, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"

describe('pruebas en PrivateRoute.jsx', () => {

    test('debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn(); // mock

        const contextValue = {

            logged: true,
            user: {

                name: 'SilverMoon',
                is: 'ABC95'
            }

        }

        render(
            <AuthContext.Provider value={ contextValue }>

                {/* <MemoryRouter> */}
                <MemoryRouter initialEntries={['/search?q=batman']}>

                    <PrivateRoute>

                        <h1>Ruta Privada</h1>

                    </PrivateRoute>

                </MemoryRouter>

            </AuthContext.Provider>
        );

        screen.debug();

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        // expect( localStorage.setItem ).toHaveBeenCalled(); // funciona
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });
});

// pruebas en el PrivateRoute https://www.udemy.com/course/react-cero-experto/learn/lecture/32141120?start=0#questions
