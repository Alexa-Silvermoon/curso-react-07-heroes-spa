import { getByText, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('pruebas en PublicRoute.jsx', () => {

    test('debe mostrar el children si no esta autenticado', () => {

        const contextValue = {

            logged: false

        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        screen.debug();

        expect( screen.getByText( 'Ruta Publica' ) ).toBeTruthy();

    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {

            logged: true,
            user: {

                name: 'SilverMoon',
                id: 'ABC95'
            }

        }

        render(
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/login']}>

                    <Routes>

                        <Route path='login' element={

                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>

                        }/>

                        <Route path='marvel' element={ <h1>Pagina Marvel</h1> } />
                    </Routes>

                </MemoryRouter>

            </AuthContext.Provider>
        );

        screen.debug();

        expect( screen.getByText('Pagina Marvel') ).toBeTruthy();

    });
});

// pruebas en el public route https://www.udemy.com/course/react-cero-experto/learn/lecture/32141140#questions
// pruebas en public route 2 https://www.udemy.com/course/react-cero-experto/learn/lecture/32141228?start=30#questions