import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('Given a aboutUs component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<AboutUs />);
        })        
        test('Then subTitle should be in the doc', () => {
            const subTitle = screen.getByTestId('subTitle');
            expect(subTitle).toBeInTheDocument();
        })
        test('Then companyDescription should be in the doc', () => {
            const companyDescription = screen.getByTestId('companyDescription');
            expect(companyDescription).toBeInTheDocument();
        })
        test('Then backgroundImage should be in the doc', () => {
            const backgroundImage = screen.getByTestId('backgroundImage');
            expect(backgroundImage).toBeInTheDocument();
        })
    })
})