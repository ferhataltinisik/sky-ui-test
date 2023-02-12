import HomePage from '../pages/home-page';
import { getBaseUrl } from '../Helpers/baseUrl';


fixture('Go to home page')
    .page(getBaseUrl());

test('Validate home page title', async t => {
    const homePage = new HomePage();
    const myText = await homePage.getHomePageHeaderText();
    await t
        .expect(myText).eql('Reference Tryout API');
});