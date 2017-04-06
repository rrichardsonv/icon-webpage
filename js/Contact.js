import React from 'react'
import ContactForm from './ContactForm'
import '../public/css/fa/font-awesome.min.css'

const Contact = React.createClass({
  render () {
    return (
      <div className='container-fluid main-content mg-t-1 contact'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='container-fluid well form-horizontal smash-form bg-d-red txt-l-cream'>
              <h1>Contact info</h1>
              <fieldset className='btn-group-justified'>
                <span className='btn'><i className='fa fa-facebook fa-3x' /></span>
                <span className='btn'><i className='fa fa-twitter fa-3x' /></span>
                <span className='btn dot-gg-icon'>.GG</span>
                <span className='btn'><i className='fa fa-camera-retro fa-3x' /></span>
                <span className='btn'><i className='fa fa-twitch fa-3x' /></span>
              </fieldset>
              <span>For cross-promotion, volunteering, and how to bring us to your convention!</span>
              <fieldset>
                <h4>Ron Hernandez</h4>
                <h4>Email: fake@fake.fake</h4>
              </fieldset>
              <span>For issues with the website.</span>
              <fieldset>
                <h4>Rich Richardson</h4>
                <h4>Email: fake@fake.fake</h4>
              </fieldset>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <ContactForm />
          </div>
        </div>
      </div>
    )
  }
})
export default Contact
