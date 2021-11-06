import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {

    test('renders Hello World as text', () => {
        //Arange
        render(<Greeting />);
    
        //Act
        //..nothing

        //Assert
        const helloworldElement = screen.getByText('Hello World');
        expect(helloworldElement).toBeInTheDocument();
    });

    test('renders text when button not clicked', () => {
        //Arange
        render(<Greeting />);
    
        //Act
        //..nothing

        //Assert
        const paragraphText = screen.getByText('It\'s good to see you!', {exact: false});
        expect(paragraphText).toBeInTheDocument();
    });

    test('renders text when button is clicked', () => {
        //Arange
        render(<Greeting />);
    
        //Act

        const buttonText = screen.getByRole('button');
        userEvent.click(buttonText);

        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render It is good to see you! when button is clicked', () => {
        //Arange
        render(<Greeting />);
    
        //Act

        const buttonText = screen.getByRole('button');
        userEvent.click(buttonText);

        //Assert
        const outputElement = screen.queryByText('It\'s good to see you!');
        expect(outputElement).toBeNull();
    });
});
