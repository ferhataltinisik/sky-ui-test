import HomePage from '../pages/home-page';
import { Selector } from 'testcafe';
import { source } from 'wd/lib/commands';

// fixture`Quality Shepherd`
//   .beforeEach(async t => { // beforeAll hack
//     await basePage.goto()

//   })

fixture('Getting Started')
    .page('https://reference-tryout-api.herokuapp.com/');


test('Validate home page title', async t => {
    const homePage = new HomePage();
    const myText = await homePage.getHomePageHeaderText();
    await t
        .expect(myText).eql('Reference Tryout API');
});


test.only('Validate the list of the end-points', async t => {
    const homePage = new HomePage();
    const myText = await homePage.getListOfEndPoints();

    const endPointList = Selector('body:nth-child(2) div:nth-child(1) > ul:nth-child(6)').find('a');
    const counter = await endPointList.count;
    console.log(counter)

    await endPointList.forEach( element => {
        const text = element.textContent; // get the text of each element
        console.log(text); // print the text to the console
      });

    // const fruits = ['apple', 'banana', 'orange'];
    // fruits.forEach(count => {
    //     // // const ep = fruit.innerText;
    //     console.log(count)
    //     // await this.homePageHeader.innerText;
    // });

});

test('My Test', async t => {
    const elements = Selector('body:nth-child(2) div:nth-child(1) > ul:nth-child(6)').find('a');
    counter = await elements.count;
    console.log(counter)
  
    await elements.forEach(async element => {
      const text = await element.textContent; // get the text of each element
      console.log(text); // print the text to the console
    });
  });
