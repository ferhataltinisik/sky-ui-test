
import HomePage from '../pages/home-page';
import InternalServerErrorPage from '../pages/internal-server-error-page';
import { getBaseUrl } from '../Helpers/baseUrl';



fixture('Getting Started')
    .page(getBaseUrl());


test('Validate internal server error page title and header', async t => {
    const homePage = new HomePage();
    const internalServerErrorPage = new InternalServerErrorPage();

    homePage.clickInternalServerErrorLink();
    const titleText = await internalServerErrorPage.getInternalServerErrorTitle();
    await t
        .expect(titleText).eql('Reference Tryout API');
    
  
    // // homePage.internalServerErrorLink.click
    // await t
    //     .expect(titleTextt).eql('Reference Tryout API');
});

