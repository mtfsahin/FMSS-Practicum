import React from 'react'
import { render, screen } from '@testing-library/react'
import emojiList from '../emojiList.json'
import '@testing-library/jest-dom'
import App from '../App'
let EmojisList;
describe("emoji-list-test", () => {
    beforeEach(() => {
        render(<App />);
        //İlk 10 adet emoji seçiyoruz
        //Select first 10 emoji
        EmojisList = emojiList.slice(0, 10);
    });
    test("Emoji list render test", () => {
        EmojisList.map((item) => {
            //Chect emoji title
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    });
});