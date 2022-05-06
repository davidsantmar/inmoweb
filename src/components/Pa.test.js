import { render, screen } from '@testing-library/react';
import PA from './PA';

describe('Given a PA component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<PA />);
        })       
        test('Then subTitle should be in the doc', () => {
            const subTitle = screen.getByTestId('subTitle');
            expect(subTitle).toBeInTheDocument();
        })
        test('Then form container should be in the doc', () => {
            const formContainer = screen.getByTestId('form-container');
            expect(formContainer).toBeInTheDocument();
        })
        test('Then title field should be in the doc', () => {
            const titleField = screen.getByTestId('title-field');
            expect(titleField).toBeInTheDocument();
        })
        test('Then description should be in the doc', () => {
            const description = screen.getByTestId('description');
            expect(description).toBeInTheDocument();
        })
        test('Then rooms title should be in the doc', () => {
            const roomsTitle = screen.getByTestId('rooms-title');
            expect(roomsTitle).toBeInTheDocument();
        })
        test('Then sqmt title should be in the doc', () => {
            const sqmtTitle = screen.getByTestId('sqmt-title');
            expect(sqmtTitle).toBeInTheDocument();
        })
        test('Then square meters container should be in the doc', () => {
            const squareMetersContainer = screen.getByTestId('square-meters-container');
            expect(squareMetersContainer).toBeInTheDocument();
        })
        test('Then pictures field should be in the doc', () => {
            const picturesField = screen.getByTestId('pictures-field');
            expect(picturesField).toBeInTheDocument();
        })
        test('Then submit button should be in the doc', () => {
            const submitButton = screen.getByTestId('submit-button');
            expect(submitButton).toBeInTheDocument();
        })
    })
})