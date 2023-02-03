import Theme from 'vitepress/theme'
import './style/vitepress.less'

import ad from 'adeng-ui'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(ad)
  }
}
