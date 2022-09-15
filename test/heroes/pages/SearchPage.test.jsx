import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'), // desestructurar y exparsir todo lo que viene en la libreria
    useNavigate: () => mockedUseNavigate // pero solo se sobrescribira el useNavigate

}));

describe('pruebas en SearchPage.jsx', () => {

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(

            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        screen.debug();

        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrarse a Batman y el input con el valor del queryString', () => {

        render(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        screen.debug();

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

    });

    test('debe de ocultar el div del "Search a Hero" si hay un heroe mostrandose en pantalla', () => {

        render(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('div-search-hero'); // lo identifica gracias al aria-label en SearchPage.jsx
        expect( alert.style.display ).toBe('none'); // se mostro el heroe? caso de si ocultese

    });

    test('debe de mostrar el error "No Hay Resultados para" si no se encuentra el heroe', () => {

        render(

            <MemoryRouter initialEntries={['/search?q=superman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        screen.debug();

        const alert2 = screen.getByLabelText('div-no-resultados-para'); // lo identifica gracias al aria-label en SearchPage.jsx
        expect( alert2.style.display ).toBe(''); // se mostro un error? caso de que si muestrese

    });

    test('debe de llamar el navigate a la pantalla nueva por medio del formulario', () => {

        const inputValue = 'flash';

        render(

            <MemoryRouter initialEntries={['/search?q=flash']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        // fireEvent.input( input, { target: { value: 'flash' } } );
        fireEvent.change( input, { target: { name: 'SearchText' ,value: inputValue } } );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        // expect( mockedUseNavigate ).toHaveBeenCalled(); // funciona
        expect( mockedUseNavigate ).toHaveBeenCalledWith( `?q=${ inputValue }` );

    });
});

// pruebas en SearchPage https://www.udemy.com/course/react-cero-experto/learn/lecture/29491680#questions
// pruebas en queryParameters https://www.udemy.com/course/react-cero-experto/learn/lecture/29491712?start=15#questions
// requireActual https://www.udemy.com/course/react-cero-experto/learn/lecture/29491766#questions
