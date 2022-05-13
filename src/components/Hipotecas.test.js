import { render, screen } from '@testing-library/react';
import Hipotecas from './Hipotecas';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Given a contacto component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Hipotecas />
                </Router>
            )
        })
        test('Then subTitle2 should be in the doc', () => {
            const subTitle2 = screen.getByTestId('subTitle2');
            expect(subTitle2).toBeInTheDocument();
        })
        test('Then house price title should be in the doc', () => {
            const housePriceTitle = screen.getByTestId('house-price-title');
            expect(housePriceTitle).toBeInTheDocument();
        })
        test('Then price container should be in the doc', () => {
            const priceContainer = screen.getByTestId('price-container');
            const subtractionButton = screen.getByTestId('subtraction-button');
            const addButton = screen.getByTestId('add-button');
            const mortgageInput = screen.getByTestId('mortgage-input');
            const euroSymbol = screen.getByTestId('euro-symbol');
            expect(priceContainer).toBeInTheDocument();
            expect(subtractionButton).toBeInTheDocument();
            expect(addButton).toBeInTheDocument();
            expect(mortgageInput).toBeInTheDocument();
            expect(euroSymbol).toBeInTheDocument();
        })
        test('Then savings title should be in the doc', () => {
            const savingsTitle = screen.getByTestId('savings-title');
            expect(savingsTitle).toBeInTheDocument();
        })
        test('Then savings container should be in the doc', () => {
            const savingsContainer = screen.getByTestId('savings-container');
            const subtractionButton = screen.getByTestId('subtraction-button');
            const addButton = screen.getByTestId('add-button');
            const savingsInput = screen.getByTestId('savings-input');
            const euroSymbol = screen.getByTestId('euro-symbol');
            expect(savingsContainer).toBeInTheDocument();
            expect(subtractionButton).toBeInTheDocument();
            expect(addButton).toBeInTheDocument();
            expect(savingsInput).toBeInTheDocument();
            expect(euroSymbol).toBeInTheDocument();
        })
        test('Then years title should be in the doc', () => {
            const yearsTitle = screen.getByTestId('years-title');
            expect(yearsTitle).toBeInTheDocument();
        })
        test('Then interest title should be in the doc', () => {
            const interestTitle = screen.getByTestId('interest-title');
            expect(interestTitle).toBeInTheDocument();
        })
        test('Then bills title should be in the doc', () => {
            const billsTitle = screen.getByTestId('bills-title');
            expect(billsTitle).toBeInTheDocument();
        })
        test('Then loan title should be in the doc', () => {
            const loanTitle = screen.getByTestId('loan-title');
            expect(loanTitle).toBeInTheDocument();
        })
        test('Then monthly fee title should be in the doc', () => {
            const monthlyFeeTitle = screen.getByTestId('monthly-title');
            expect(monthlyFeeTitle).toBeInTheDocument();
        })
    })
})