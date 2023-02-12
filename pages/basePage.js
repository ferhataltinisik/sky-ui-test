import { t } from 'testcafe'
import minimist from 'minimist'

// get env from cli or use default
const args = minimist(process.argv.slice(2))
const env = args.env || 'https://reference-tryout-api.herokuapp.com/docs'
const baseUrl = env.endsWith('/') ? env : `${env}/`

const basePage = {
  baseUrl,

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto (relativeUrl = '') {
    await t.navigateTo(`${this.baseUrl}${this.url}${relativeUrl}`)
  }
}
export default basePage