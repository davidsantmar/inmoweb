import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Inmuebles from './Inmuebles';

describe('Given a inmuebles component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(
                <Router>
                    <Inmuebles />
                </Router>            )
        })
        test('Then filter container should be in the doc', () => {
            const filterContainer = screen.getByTestId('filter-container');
            expect(filterContainer).toBeInTheDocument();
        })
        test('Then cheaper button should be in the doc', () => {
            const cheaperButton = screen.getByTestId('cheaper-button');
            expect(cheaperButton).toBeInTheDocument();
        })
        test('Then relevance button should be in the doc', () => {
            const relevanceButton = screen.getByTestId('relevance-button');
            expect(relevanceButton).toBeInTheDocument();
        })
        test('Then flats-grid should be in the doc', () => {
            const flatsGrid = screen.getByTestId('flats-grid');
            expect(flatsGrid).toBeInTheDocument();
        })
    })
})