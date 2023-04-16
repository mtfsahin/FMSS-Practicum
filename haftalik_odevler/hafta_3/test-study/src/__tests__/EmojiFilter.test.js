import filterEmoji from "../filterEmoji";

//Description test
describe("filterEmoji-test", () => {
    
    test("correctly filters emojis searhc text", () => {
        // Test parameters
        const searchText = "heart";
        const maxResults = 10;
        // Call the filterEmoji function and assign the result to filteredEmojis variable
        const filteredEmojis = filterEmoji(searchText, maxResults);
        // Iterate over each filtered emoji and test whether its title or keywords includes the search text
        expect(filteredEmojis.length).toBeGreaterThan(0);
        filteredEmojis.forEach(emoji => {
            expect(emoji.title.toLowerCase().includes(searchText.toLowerCase()) || emoji.keywords.includes(searchText));
        });
    });
});
