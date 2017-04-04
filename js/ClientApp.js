import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import HeaderBar from './HeaderBar'
import Events from './Events'
import '../public/normalize.css'
// import '../public/style.css'
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
          </div>
        </Provider>
      </BrowserRouter>
      )
  }
})

render(<App />, document.getElementById('app'))

