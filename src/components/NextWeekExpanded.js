import React from 'react'

const NextWeekExpanded = ({name, day, date, high, low, icon, desc, humidity, uv, wind, pressure, dewPoint}) => {
  return (
    <div id='nextWeekDiv'>
      <h2 id="country-title">Weather in {name} on {day}</h2>
      <p>{date}</p>
      <h2>{high}° / {low}° F</h2>
      <img src={icon} alt="Weather icon."/>
      <p>{desc}</p>
      <div id="table-parent">
      <table id="left-table">
        <tbody>
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
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Wind Speed</td>
            <td>{wind} mph</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{(pressure * .030).toFixed(2)} inHg</td>
          </tr>
          <tr>
            <td>Dew Point</td>
            <td>{Math.round(dewPoint)}°F</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    )
}

export default NextWeekExpanded


