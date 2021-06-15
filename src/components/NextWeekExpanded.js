import React from 'react'

const NextWeekExpanded = ({name, day, date, icon, temp, desc, sunrise, sunset}) => {
  return (
    <div id='nextWeekDiv'>
      <h2 id="country-title">Weather in {name} on {day}</h2>
      <p>{date}</p>
      <img src={icon} alt="Weather icon."/>
      <h2>High of {temp}° F</h2>
      <p>{desc}</p>
      <p>Sunrise: {sunrise} Sunset: {sunset}</p>
    </div>
    )
}

export default NextWeekExpanded