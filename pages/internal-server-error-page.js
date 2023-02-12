import { Selector } from 'testcafe';

export default class InternalServerErrorPage {

    constructor () {
        this.serviceTitle = Selector('#service');
        this.serviceHeader = Selector('body:nth-child(2) div:nth-child(1) > h2:nth-child(4)');
    }

    async getInternalServerErrorTitle() {
        return await this.serviceTitle.innerText;
    }
}
