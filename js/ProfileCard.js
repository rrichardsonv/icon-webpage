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
  getInitialState() {
    return({
      detailsVisibility: 'hidden'
    })
  },
  handlePortraitMouseOver () {
    this.setState({detailsVisibility: ''})
  },
  render () {
    const { name, title, headshot, blurb, character } = this.props.member
    return (
      <div
        onMouseOver={this.handlePortraitMouseOver}
        className='item item-responsive'
      >
        <div className='top-details profile-wrapper'>
          <h3>{name}</h3>
          <strong>
            <p>{title}</p>
          </strong>
        </div>
        <div className='inner-wrapper'>
          <img className='event-card-bg' src={`../public/headshots/${headshot}`} />
        </div>
        <div className={`container-fluid bottom-details profile-wrapper ${this.state.detailsVisibility}`}>
          <div className='row'>
            <img className='col-sm-3 main-character-icon' src={`../public/characters/${character}`} />
            <span className='col-sm-9'>{blurb}</span>
          </div>
        </div>
      </div>
    )
  }
})

export default ProfileCard
