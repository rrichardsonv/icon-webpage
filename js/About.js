import React from 'react'
import bios from '../public/team.json'
import ProfileCard from './ProfileCard'

const About = React.createClass({
  render () {
    return (
      <div className='container main-content mg-t-1 about'>
        {bios.team.map((member) => {
          return (
            <ProfileCard key={member.id} member={member} />
          )
        })}
      </div>
    )
  }
})

export default About
