import React from 'react'


const WeatherThisWeek = ({ date, icon, high, low, desc }) => {
  return (
    <div className="daily-weather">
      <p>{date}</p>
      <img src={icon} alt="Weather icon." />
      <p>{high} / {low}°F</p>
      <p>{desc}</p>
    </div>
  )
}

export default WeatherThisWeek