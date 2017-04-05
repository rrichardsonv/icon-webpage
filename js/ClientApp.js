import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import HeaderBar from './HeaderBar'
import Events from './Events'
import Tournaments from './Tournaments'
import About from './About'
import '../public/normalize.css'
import '../public/main.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='container-fluid'>
            <HeaderBar />
            <Match exactly pattern='/' component={Landing} />
            <Match exactly pattern='/events' component={Events} />
            <Match exactly pattern='/tournaments' component={Tournaments} />
            <Match exactly pattern='/about' component={About} />
          </div>
        </Provider>
      </BrowserRouter>
      )
  }
})

render(<App />, document.getElementById('app'))

