import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import Inmuebles from './Inmuebles';
import AboutUs from './AboutUs';
import Hipotecas from './Hipotecas';
import Contacto from './Contacto';

describe('Given a header component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Header />);
        })                        
        test('Then logo link should be in the doc', () => {
            const logoLink = screen.getByTestId('logo-link');
            expect(logoLink).toBeInTheDocument();
        })
        test('Then aboutUs link should be in the doc', () => {
            const aboutUsLink = screen.getByText('Sobre nosotros');
            expect(aboutUsLink).toBeInTheDocument();
        });
        test('Then hipotecas link should be in the doc', () => {
            const hipotecasLink = screen.getByText('Hipotecas');
            expect(hipotecasLink).toBeInTheDocument();
        });
        test('Then contacto link should be in the doc', () => {
            const hipotecasLink = screen.getByText('Contacto');
            expect(hipotecasLink).toBeInTheDocument();
        });
        test('When logo link its clicked should render Inmuebles component', () => {
            const logoLink = screen.getByTestId('logo-link');
            fireEvent.click(logoLink);
            render(
                <MemoryRouter>
                    <Inmuebles />
                </MemoryRouter>
            );
        });
        test('When aboutUs its clicked should render AboutUs component', () => {
            const aboutUsLink = screen.getByText('Sobre nosotros');
            fireEvent.click(aboutUsLink);
            render(
                <MemoryRouter>
                    <AboutUs />
                </MemoryRouter>
            );
        });
        test('When hipotecas its clicked should render Hipotecas component', () => {
            const hipotecasLink = screen.getByText('Hipotecas');
            fireEvent.click(hipotecasLink);
            render(
                <MemoryRouter>
                    <Hipotecas />
                </MemoryRouter>
            );
        });
        test('When contacto its clicked should render Contacto component', () => {
            const contactoLink = screen.getByText('Contacto');
            fireEvent.click(contactoLink);
            render(
                <MemoryRouter>
                    <Contacto />
                </MemoryRouter>
            );
        });
    });
})
