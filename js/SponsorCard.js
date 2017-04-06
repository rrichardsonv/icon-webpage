import React from 'react'
const { shape, string } = React.PropTypes

const SponsorCard = React.createClass({
  propTypes: {
    sponsor: shape({
      name: string,
      url: string,
      logo: string
    })
  },
  render () {
    const { name, url, logo } = this.props.sponsor
    return (
      <div className='row'>
        <div className='panel panel-danger'>
          <div className='panel-heading'><a href={url}>{`Sponsored by:${name}`}</a></div>
          <div className='panel-body'>
            <img className='sm-logo' src={logo} />
            <p>
            My name is Bryan Collins and I am a student of the Digital Skills Academeny WebElevate 2.1 programme, where I specialised</p>
          </div>
        </div>
      </div>
    )
  }
})

export default SponsorCard
