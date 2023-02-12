
import HomePage from '../pages/home-page';
import InternalServerErrorPage from '../pages/internal-server-error-page';
import { getBaseUrl } from '../Helpers/baseUrl';



fixture`Go to home page`
    .beforeEach(async t => { // beforeAll hack
        const homePage = new HomePage();
        await homePage.goto("/") // pass end-pont
    })

test('Validate internal server error page title and header', async t => {
    const homePage = new HomePage();
    const internalServerErrorPage = new InternalServerErrorPage();

    homePage.clickInternalServerErrorLink();
    const titleText = await internalServerErrorPage.getInternalServerErrorTitle();
    await t
        .expect(titleText).eql('Reference Tryout API');

});

