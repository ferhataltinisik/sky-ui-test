import { Selector } from 'testcafe';
import BasePage from './basePage';

export default class InternalServerErrorPage extends BasePage{

    constructor () {
        super();
        this.serviceTitle = Selector('#service');
        this.serviceHeader = Selector('body:nth-child(2) div:nth-child(1) > h2:nth-child(4)');
    }

    async getInternalServerErrorTitle() {
        return await this.serviceTitle.innerText;
    }
}
