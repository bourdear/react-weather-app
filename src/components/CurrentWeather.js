import React from 'react'

const CurrentWeather = ({ time, name, country, icon, desc, high, low, humidity, uv, wind, pressure, visibility, temp, sunrise, sunset }) => {
  return (
    <div id="current-weather-div">
      <h2 id="country-title">Current Weather in {name}, {country}</h2>
      <p>As of {time}</p>
      <div id="temp-icon">
        <h2 id="temp">{temp}° F</h2>
        <img src={icon} id="icon" alt="Weather icon."/>
      </div>
      <p>{desc}</p>
      <div id="table-parent">
      <table id="left-table">
        <tr>
          <td>High / Low</td>
          <td>{high}° / {low}°</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{humidity}%</td>
        </tr>
        <tr>
          <td>UV Index</td>
          <td>{uv}</td>
        </tr>
      </table>
      <table>
        <tr>
          <td>Wind</td>
          <td>{wind}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{pressure.toFixed(2)} inHg</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>{(visibility * 0.000621371).toFixed(2)} mi</td>
        </tr>
      </table>
      </div>
      <p>Sunrise: {sunrise} Sunset: {sunset}</p>
    </div>
  )
} 

export default CurrentWeather