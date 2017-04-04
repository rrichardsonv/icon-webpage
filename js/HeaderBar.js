import React from 'react'
import { Link } from 'react-router'

const HeaderBar = React.createClass({
  render () {
    return (
      <nav className='navbar navbar-fixed-top navbar-inverse iCon'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link to='/' className='navbar-brand'>iCon Tournaments</Link>
          </div>
          <div className='collapse navbar-collapse'>
            <div className='nav navbar-nav'>
              <div className='btn-group-justified nav-btn-group'>
                <Link className='btn btn-info nav-btn' to='/events'>
                Events
                </Link>
                <Link className='btn btn-info nav-btn' to='/tournaments'>
                Tournaments
                </Link>
                <Link className='btn btn-info nav-btn' to='/about'>
                About us
                </Link>
                <Link className='btn btn-info nav-btn' to='/contact'>
                Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
})

export default HeaderBar
