import React from 'react'

const nextWeekExpanded = ({name, country, dateTime, icon, temp, sunrise, sunset}) => {
  return (
    <div id='nextWeekDiv'>
      <h2 id="country-title">Current Weather in {name}, {country}</h2>
      <p>{dateTime}</p>
      <img src={icon} alt="Weather icon."/>
      <h2>{temp}° F</h2>
      <p>Sunrise: {sunrise} Sunset: {sunset}</p>
    </div>
    )
}

export default nextWeekExpanded