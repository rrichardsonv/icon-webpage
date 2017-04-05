import React from 'react'
import SponsorCard from './SponsorCard'
const { shape, string, arrayOf, object } = React.PropTypes

const JumboEvent = React.createClass({
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
    const { title, startdate, enddate, tickets, location, url, sponsors } = this.props.con
    return (
      <div className='jumbotron next-event'>
        <div className='container-fluid'>
          <h1 className='col-md-offset-8 next-event-title'>
            <a href={url}>
              {title}
            </a>
          </h1>
          <div className='row'>
            <div className='col-md-4 fl-r'>
              <div className='center-block'>
                <img src='//placehold.it/200x200' className='img-responsive event-card-bg' />
              </div>
              <div className='inner-wrapper'>
                <div className='center-block btn-group-justified card-menu pd-tb-1'>
                  <a href={tickets} className='btn btn-primary'>
                    Tickets
                  </a>
                  <a href={`https://maps.google.com/?q=${location}`} className='btn btn-primary'>
                    Directions
                  </a>
                  <a href={url} className='btn btn-primary'>
                    Website
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              {sponsors.map((sponsor) => {
                return (
                  <SponsorCard sponsor={sponsor} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default JumboEvent
