import Theme from 'vitepress/theme'
import './style/vitepress.less'

import kt from 'adeng-ui'

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.use(kt)
  }
}
