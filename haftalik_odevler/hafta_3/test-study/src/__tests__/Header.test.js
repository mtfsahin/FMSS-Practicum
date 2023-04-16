import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';

test('renders header with Emoji Search text', () => {
    render(<Header />);
    //Headerdan içinde "Emoji Search" içeren elementi aldıyorum
    //get the element containing "Emoji Search" in the header
    const headerElement = screen.getByText('Emoji Search');
    //Görünürlüğünü doğruluyorum
    //I confirm visibility
    expect(headerElement).toBeInTheDocument();
});
