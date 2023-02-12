
import { getBaseUrl } from '../Helpers/baseUrl';
import { t } from 'testcafe'

export default class BasePage{

/**
   * 
   * @param  {string} endPoint
   */

  async goto (endPoint) {
    return await t.navigateTo(getBaseUrl()+ endPoint)
  }

}