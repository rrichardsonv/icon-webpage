import React from 'react'

const { shape, string } = React.PropTypes

const ProfileCard = React.createClass({
  propTypes: {
    member: shape({
      name: string,
      title: string,
      headshot: string,
      blurb: string,
      character: string
    })
  },
  getInitialState () {
    return {
      detailsVisibility: 'hidden'
    }
  },
  revealBlurb () {
    this.setState({detailsVisibility: ''})
  },
  hideBlurb () {
    this.setState({detailsVisibility: 'hidden'})
  },
  render () {
    const { name, title, headshot, blurb, character } = this.props.member
    return (
      <div
        onMouseOver={this.revealBlurb}
        onMouseOut={this.hideBlurb}
        className='item item-responsive'
      >
        <div className={`top-details profile-wrapper ${this.state.detailsVisibility}`}>
          <h3>{name}</h3>
          <strong>
            <p>{title}</p>
          </strong>
        </div>
        <div className='inner-wrapper'>
          <img className='event-card-bg' src={`../public/headshots/${headshot}`} />
        </div>
        <div className={`container-fluid responsive-blurb bottom-details profile-wrapper ${this.state.detailsVisibility}`}>
          <div className='row'>
            <img className='col-sm-3 col-xs-3 main-character-icon' src={`../public/characters/${character}`} />
            <span className='col-sm-9 col-xs-9'>{blurb}</span>
          </div>
        </div>
      </div>
    )
  }
})

export default ProfileCard
