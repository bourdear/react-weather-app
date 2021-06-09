import React from 'react'

const CurrentWeather = ({ dateTime, name, desc, temp, feelsLike, sunrise, sunset }) => {
  return (
    <div>
      <p>{dateTime}</p>
      <p>Current Weather in {name}</p>
      <h2>{temp}° F</h2>
      <p>Feels like {feelsLike}°F. {desc}.</p>
      <p>Sunrise: {sunrise} Sunset: {sunset}</p>
    </div>
  )
}

export default CurrentWeather