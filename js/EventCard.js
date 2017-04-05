import React from 'react'
// import SponsorCard from './SponsorCard'
const { shape, string, arrayOf, object } = React.PropTypes

const EventCard = React.createClass({
  propTypes: {
    con: shape({
      id: string,
      title: string,
      start_date: string,
      end_date: string,
      tickets: string,
      location: string,
      url: string,
      sponsors: arrayOf(object)
    })
  },
  render () {
    const { title, startdate, enddate, tickets, url } = this.props.con
    return (
      <div className='item item-responsive'>
        <div className='inner-wrapper'>
          <img className='event-card-bg' src='../public/img/logo.png' />
        </div>
        <div className='overlay' />
        <div className='overview'>
          <h3>{title}</h3>
          <p>{`${startdate} -- ${enddate}`}</p>
        </div>
        <div className='details-wrapper'>
          <div className='btn-group-vertical inner-wrapper'>
            <a className='btn btn-danger btn-xs' href={url}>More info</a>
            <a className='btn btn-danger btn-xs' href={tickets}>Get tickets</a>
            <a className='btn btn-danger btn-xs' href={tickets}>Tournaments</a>
          </div>
        </div>
      </div>
    )
  }
})

export default EventCard
