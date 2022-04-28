import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Given a footer component', () => {
    describe('When its rendered', () => {
        render(<Footer />);
        test('Then footer should be in the doc', () => {
            const footerText = screen.getByTestId('footerText');
            expect(footerText).toBeInTheDocument();
        })

    })
})