it('should login with valid credentials', async () => {
    await browser.url('https://www.microsoft.com/en-us');
    await expect($('#uhfLogo')).not.toBeExisting();
    await browser.takeScreenshot()
});
