import { Selector, t } from 'testcafe';
import BasePage from './basePage';

export default class HomePage extends BasePage{
    constructor() {
        super();
        this.homePageHeader = Selector('#service');
        this.internalServerErrorLink = Selector('#service');
        this.listOfEndPoints = Selector('ul>li>a');
    }

    async getHomePageHeaderText() {
        return await this.homePageHeader.innerText;
    }

    async clickInternalServerErrorLink() {
        await t.click(this.internalServerErrorLink)
    }

    async getListOfEndPoints() {
        console.log(this.listOfEndPoints.count);
    }
    
}