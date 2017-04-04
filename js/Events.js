import React from 'react'
import preload from '../public/cons.json'
import EventCard from './EventCard'

const Events = React.createClass({
  render () {
    const cons = preload.cons
    return (
      <div className='container mg-t-1 events-content'>
        {cons.map((con) => {
          return (
            <EventCard key={con.id} con={con} />
          )
        })}
      </div>
    )
  }
})

export default Events
