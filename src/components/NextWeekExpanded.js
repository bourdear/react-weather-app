import React from 'react'

const NextWeekExpanded = ({name, day, date, high, low, icon, desc, humidity, uv, wind, pressure, visibility}) => {
  return (
    <div id='nextWeekDiv'>
      <h2 id="country-title">Weather in {name} on {day}</h2>
      <p>{date}</p>
      <h2>{high}° / {low}°</h2>
      <img src={icon} alt="Weather icon."/>
      <p>{desc}</p>
      <table>
        <tbody>
          <tr>
            <td>High / Low</td>
            <td>{high}° / {low}°</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity} %</td>
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
            <td>Wind Gusts</td>
            <td>{wind} mph</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{(pressure * .030).toFixed(2)} in</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{Math.round(visibility)} miles</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default NextWeekExpanded


