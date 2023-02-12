import HomePage from '../pages/home-page';


fixture`Go to home page`
    .beforeEach(async t => { // beforeAll hack
        const homePage = new HomePage();
        await homePage.goto("/") // pass end-pont
    })

test('Validate home page title', async t => {
    const homePage = new HomePage();
    const myText = await homePage.getHomePageHeaderText();
    await t
        .expect(myText).eql('Reference Tryout API');
});