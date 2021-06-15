import './App.css'
import './components/WeatherThisWeek.css'
import './components/CurrentWeather.css'
import CurrentWeather from './components/CurrentWeather'
import WeatherThisWeek from './components/WeatherThisWeek'
import NextWeekExpanded from './components/NextWeekExpanded'
import React, {useState} from 'react'
import axios from 'axios'
import moment from 'moment'
import apiKey from './openWeatherKey'


function App() {
  const [search, setSearch] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [apiData, setApiData] = useState([])
  const [nextWeekData, setNextWeekData] = useState([])
  const [showData, setShowData] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [windDirection, setWindDirection] = useState('')
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

  const getData = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=imperial`
    const currentWeatherInfo = await axios.get(apiURL)
    const lat = currentWeatherInfo.data.coord.lat
    const lon = currentWeatherInfo.data.coord.lon
    const nextWeekApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly&appid=${apiKey}&units=imperial`
    const nextWeekWeather = await axios.get(nextWeekApiURL)
    setApiData(() => currentWeatherInfo.data)
    setNextWeekData(() => nextWeekWeather.data)
    setShowData(() => true)
    setShowCurrent(() => true)
    showNext && setShowNext(() => false)
  }

  const handleSearch = (event) => {
    setSearch(() => event.target.value)
    setSearchTerm(() => event.target.value.split(' ').join('%20'))
  }

  const handleClick = (event) => {
    event.preventDefault()
    getData()
    setSearch('')
  }

  const handleNextWeekClick = (event) => {
    event.preventDefault()
    setShowCurrent(() => false)
    setShowNext(() => true)
  }


  const getWindDirection = (angle) => {
    const angleMod = angle % 360
    const index = Math.round((angleMod < 0 ? angleMod + 360 : angleMod) / 45) % 8
    setWindDirection(directions[index])
  } 

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="App">
      <h1>How's the Weather?</h1>
      <div>
        Please enter a city <input
        value={search}
        onChange={handleSearch} />
        <button onClick={handleClick}>Search</button>
      </div> {showData &&
        <div id="all-weather-parent">
          {showCurrent && <CurrentWeather
            dateTime={moment.unix(apiData.dt).format('LLL')}
            name={apiData.name} 
            country={apiData.sys.country}
            icon={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
            desc={capFirstLetter(apiData.weather[0].description)}
            temp={Math.round(apiData.main.temp)}
            feelsLike={Math.round(apiData.main.feels_like)}
            sunrise={moment.unix(apiData.sys.sunrise).utcOffset((apiData.timezone) / 60).format('LT')}
            sunset={moment.unix(apiData.sys.sunset).utcOffset((apiData.timezone) / 60).format('LT')} 
          />
          }
          {showNext && <NextWeekExpanded
            name={'Portland'}
            country={'US'}
            dateTime={'7:00'}
            temp={40}
            
          />
          }
          <h2>7-day forecast</h2> 
          <div className="next-week-parent" onClick={handleNextWeekClick}>
            <WeatherThisWeek 
              id={'1'}
              date={moment.unix(nextWeekData.daily[1].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[1].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[1].temp.max)} low={Math.round(nextWeekData.daily[1].temp.min)}
              desc={nextWeekData.daily[1].weather[0].description}
            />  
            <WeatherThisWeek 
              id={2}
              date={moment.unix(nextWeekData.daily[2].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[2].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[2].temp.max)} low={Math.round(nextWeekData.daily[2].temp.min)}
              desc={nextWeekData.daily[2].weather[0].description}
            />  
            <WeatherThisWeek 
              id={3}
              date={moment.unix(nextWeekData.daily[3].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[3].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[3].temp.max)} low={Math.round(nextWeekData.daily[3].temp.min)}
              desc={nextWeekData.daily[3].weather[0].description}
            />  
            <WeatherThisWeek 
              id={4}
              date={moment.unix(nextWeekData.daily[4].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[4].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[4].temp.max)} low={Math.round(nextWeekData.daily[4].temp.min)}
              desc={nextWeekData.daily[4].weather[0].description}
            />  
            <WeatherThisWeek 
              id={5}
              date={moment.unix(nextWeekData.daily[5].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[5].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[5].temp.max)} low={Math.round(nextWeekData.daily[5].temp.min)}
              desc={nextWeekData.daily[5].weather[0].description}
            />  
            <WeatherThisWeek 
              id={6}
              date={moment.unix(nextWeekData.daily[6].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[6].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[6].temp.max)} low={Math.round(nextWeekData.daily[6].temp.min)}
              desc={nextWeekData.daily[6].weather[0].description}
            />  
            <WeatherThisWeek 
              id={7}
              date={moment.unix(nextWeekData.daily[7].dt).format('ddd, MMM DD')}
              icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[7].weather[0].icon}@2x.png`}
              high={Math.round(nextWeekData.daily[7].temp.max)} low={Math.round(nextWeekData.daily[7].temp.min)}
              desc={nextWeekData.daily[7].weather[0].description}
            />  
          </div>     
        </div>
      }  
    </div>
  )
}

export default App;
