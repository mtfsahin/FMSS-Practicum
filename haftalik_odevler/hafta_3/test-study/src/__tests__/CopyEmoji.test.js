
import React from 'react'
import App from '../App'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

//Test description
describe("copy-emoji-test", () => {
    let CopyEmoji;
    beforeEach(() => {
        render(<App/>);
        //select Grinning emoji
        CopyEmoji = screen.getByText("Grinning")
    });
    test('Kopyalandı mı ?', () => {
        fireEvent.click(CopyEmoji)
        expect(CopyEmoji.parentElement.getAttribute("data-clipboard-text"))

    })

});