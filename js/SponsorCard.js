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
      <div className='show-card'>
        {`Sponsored by:${name}`}
        <a href={url}>
          <img className='sm-logo' src={logo} />
        </a>
      </div>
    )
  }
})

export default SponsorCard
