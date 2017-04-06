import React from 'react'
// import EventCard from './EventCard'
import JumboEvent from './JumboEvent'
import preload from '../public/cons.json'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <JumboEvent con={preload.cons[0]} />
      </div>
    )
  }
})

export default Landing
