import { render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import Contacto from './Contacto';
import PA from './PA';

describe('Given a contacto component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Contacto />
                </Router>
            )
        })
        test('Then subTitle2 should be in the doc', () => {
            const subTitle2 = screen.getByTestId('subTitle2');
            expect(subTitle2).toBeInTheDocument();
        })
        test('Then form container should be in the doc', () => {
            const formContainer = screen.getByTestId('form-container');
            expect(formContainer).toBeInTheDocument();
        })
        test('Then name field should be in the doc', () => {
            const nameField = screen.getByTestId('name-field');
            expect(nameField).toBeInTheDocument();
        })
        test('Then email field should be in the doc', () => {
            const emailField = screen.getByTestId('email-field');
            expect(emailField).toBeInTheDocument();
        })
        test('Then message field should be in the doc', () => {
            const messageField = screen.getByTestId('message-field');
            expect(messageField).toBeInTheDocument();
        })
        test('When submit button its clicked should send email', () => {
            const submitButton = screen.getByTestId('submit-button');
            fireEvent.click(submitButton);
        });       
        test('Then subTitle1 should be in the doc', () => {
            const subTitle1 = screen.getByTestId('subTitle1');
            expect(subTitle1).toBeInTheDocument();
        })
        test('Then contact details should be in the doc', () => {
            const contactDetails = screen.getByTestId('contact-details');
            expect(contactDetails).toBeInTheDocument();
        })
        test('Then google map should be in the doc', () => {
            const googleMap = screen.getByTestId('google-map');
            expect(googleMap).toBeInTheDocument();
        })
        test('When administrator button its clicked should render PA component', () => {
            const adminButton = screen.getByTestId('admin-button');
            fireEvent.click(adminButton);
            render(
                <MemoryRouter>
                    <PA />
                </MemoryRouter>
            );
        });
    })
})