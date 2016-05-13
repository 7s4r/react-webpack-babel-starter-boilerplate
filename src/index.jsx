import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { addLocaleData, IntlProvider } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'

import App from './components/App'
import Home from './components/Home'
import Packages from './components/Packages'

addLocaleData(enLocaleData)

const locale = 'en'

render(
  <IntlProvider locale={locale}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="packages" component={Packages} />
      </Route>
    </Router>
  </IntlProvider>,
  document.getElementById('app')
)
