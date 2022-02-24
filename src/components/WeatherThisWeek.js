import React from 'react'


const WeatherThisWeek = ({ id, date, icon, high, low, desc }) => {
  return (
    <div className="daily-weather" id={id}>
      <p className="weather-items">{date}</p>
      <img src={icon} alt="Weather icon." className="weather-items" />
      <p className="weather-items">{high} / {low} °F</p>
      <p className="weather-items">{desc}</p>
    </div>
  )
}

export default WeatherThisWeek