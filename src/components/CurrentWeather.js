import React from 'react'

const CurrentWeather = ({ dateTime, name, country, icon, desc, temp, feelsLike, sunrise, sunset }) => {
  return (
    <div>
      <p>{dateTime}</p>
      <p>Current Weather in {name}, {country}</p>
      <img src={icon} alt="Weather icon."/>
      <h2>{temp}° F</h2>
      <p>Feels like {feelsLike}°F. {desc}.</p>
      <p>Sunrise: {sunrise} Sunset: {sunset}</p>
    </div>
  )
}

export default CurrentWeather