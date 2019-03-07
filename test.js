describe('My Google Search', () => {
    it('should open the page', () => {
        browser.url('http://google.com');
    });

    it('should search for something', () => {
        browser.takeSnapshot('search');
    });
});