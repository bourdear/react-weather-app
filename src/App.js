import './App.css'
import './components/WeatherThisWeek.css'
import CurrentWeather from './components/CurrentWeather'
import WeatherThisWeek from './components/WeatherThisWeek'
import React, {useState} from 'react'
import axios from 'axios'
import moment from 'moment'
import apiKey from './openWeatherKey'
import locationKey from './locationIqKey'

function App() {
  const [search, setSearch] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [apiData, setApiData] = useState([])
  const [locationData, setLocationData] = useState([])
  const [showData, setShowData] = useState(false)
  const [windDirection, setWindDirection] = useState('')
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

  const getData = async () => {
    const locationURL = `https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${searchTerm}&countrycodes=us&format=json`
    const response = await axios.get(locationURL)
    setLocationData(response.data)
    const lat = response.data[0].lat
    const lon = response.data[0].lon
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    const weatherInfo = await axios.get(apiURL)
    setApiData(() => weatherInfo.data)
    setShowData(() => true)
    console.log('data Fetched')
    // .catch(error => {
    //   console.log("That didn't work")
    }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setSearchTerm(search.split(' ').join('%20'))
  }

  const handleClick = (event) => {
    event.preventDefault()
    getData()
    setSearch('')
  }

  const getWindDirection = (angle) => {
    const angleMod = angle % 360
    const index = Math.round((angleMod < 0 ? angleMod + 360 : angleMod) / 45) % 8
    setWindDirection(directions[index])
  } 

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  console.log(apiData)

  return (
    <div className="App">
      <h1>How's the Weather?</h1>
      <div>
        Please enter a city <input
        value={search}
        onChange={handleSearch} />
        <button onClick={handleClick}>Search</button>
      </div> {showData &&
        <div>
          <CurrentWeather
            dateTime={moment.unix(apiData.current.dt).format('LLL')}
            name={locationData[0].display_name} 
            desc={capFirstLetter(apiData.current.weather[0].description)}
            temp={Math.round(apiData.current.temp)}
            feelsLike={Math.round(apiData.current.feels_like)}
            sunrise={moment.unix(apiData.current.sunrise).format('LT')}
            sunset={moment.unix(apiData.current.sunset).format('LT')} 
          />
          <h2>7-day forecast</h2> 
          <div className="next-week-parent">
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[0].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[0].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[0].temp.max)} low={Math.round(apiData.daily[0].temp.min)}
              desc={apiData.daily[0].weather[0].description}
            />  
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[1].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[1].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[1].temp.max)} low={Math.round(apiData.daily[1].temp.min)}
              desc={apiData.daily[1].weather[0].description}
            /> 
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[2].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[2].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[2].temp.max)} low={Math.round(apiData.daily[2].temp.min)}
              desc={apiData.daily[2].weather[0].description}
            /> 
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[3].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[3].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[3].temp.max)} low={Math.round(apiData.daily[3].temp.min)}
              desc={apiData.daily[3].weather[0].description}
            /> 
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[4].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[4].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[4].temp.max)} low={Math.round(apiData.daily[4].temp.min)}
              desc={apiData.daily[4].weather[0].description}
            /> 
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[5].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[5].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[5].temp.max)} low={Math.round(apiData.daily[5].temp.min)}
              desc={apiData.daily[5].weather[0].description}
            /> 
            <WeatherThisWeek 
              date={moment.unix(apiData.daily[6].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${apiData.daily[6].weather[0].icon}@2x.png`}
              high={Math.round(apiData.daily[6].temp.max)} low={Math.round(apiData.daily[6].temp.min)}
              desc={apiData.daily[6].weather[0].description}
            /> 
          </div>     
        </div>
      }  
    </div>
  );
}

export default App;
