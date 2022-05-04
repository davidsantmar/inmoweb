import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a header component', () => {
    describe('When its rendered', () => {
            render(<Header />);
     
        test('Then header container should be in the doc', () => {
            const headerContainer = screen.getByTestId('header-container');
            expect(headerContainer).toBeInTheDocument();
        })
        /*test('Then logo link should be in the doc', () => {
            const logoLink = screen.getByTestId('logoLink');
            expect(logoLink).toBeInTheDocument();
        })
        test('Then aboutUs link should be in the doc', () => {
            const aboutUsLink = screen.getByTestId('about-us-link');
            expect(aboutUsLink).toBeInTheDocument();
        })
        test('Then hipotecas link should be in the doc', () => {
            const hipotecasLink = screen.getByTestId('hipotecas-link');
            expect(hipotecasLink).toBeInTheDocument();
        })
        test('Then contacto link should be in the doc', () => {
            const contactoLink = screen.getByTestId('contacto-link');
            expect(contactoLink).toBeInTheDocument();
        })*/
    })
})