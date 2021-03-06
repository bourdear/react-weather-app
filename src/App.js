import './App.css'
import './components/WeatherThisWeek.css'
import './components/CurrentWeather.css'
import './components/NextWeekExpanded.css'
import './components/SearchBar.css'
import logo from './assets/logo.png'
import stateArr from './usStates'
import CurrentWeather from './components/CurrentWeather'
import SearchBar from './components/SearchBar'
import WeatherThisWeek from './components/WeatherThisWeek'
import NextWeekExpanded from './components/NextWeekExpanded'
import React, {useState} from 'react'
import axios from 'axios'
import moment from 'moment'

function App() {
  const [search, setSearch] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [apiData, setApiData] = useState([])
  const [nextWeekData, setNextWeekData] = useState([])
  const [nextWeekIndex, setNextWeekIndex] = useState(1)
  const [showData, setShowData] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [showErrOne, setShowErrOne] = useState(false)
  const [showErrTwo, setShowErrTwo] = useState(false)
  const [smallWindow, setSmallWindow] = useState(true)
  const apiKey = process.env.REACT_APP_WEATHER_KEY
  
  const errMessage = () => {
    if (!showData) {
      setShowErrOne(() => true)
    } else {
      setShowErrTwo(() => true)
    }
  }

  const getData = async () => {
    try {
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
      setShowErrTwo(() => false)
    }
    catch(err) {
      if (err.response.status === 404) {
        errMessage()
      }
    }
  }  

  const handleSearch = (event) => {
    setSearch(() => event.target.value)
    if ((event.target.value.split(',')[1])
      && (event.target.value.split(',').length < 3)) {
        const secondItem = (event.target.value.split(',')[1]).toLowerCase().trim()
        if ((stateArr.some(i => i.name.toLowerCase().includes(secondItem)))
           || (stateArr.some(i => i.abbreviation.toLowerCase().includes(secondItem)))) {
            setSearchTerm(() => `${event.target.value}, us`)
        }
    } else {
      setSearchTerm(() => event.target.value)
    }
  }
   
  const handleClick = (event) => {
    event.preventDefault()
    getData()
    setSearch('')
  }

  const handleNextWeekClick = (event) => {
    event.preventDefault()
    setShowNext(() => true)
    if (event.target.id) {
      setNextWeekIndex(() => event.target.id)
    } else {
      setNextWeekIndex(() => 1)
    }
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      getData()
      setSearch('')
    }
  }

  const handleResize = () => {
    if (window.innerWidth <= 1199) {
      setSmallWindow(true)
    } else {
      setSmallWindow(false)
    }
  }

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  window.addEventListener('resize', handleResize)

  return (
    <div id="app-parent">
      <nav className={!showData && smallWindow? "navbar" : "navbar2"}>
        <ul>
          <li className='nav-items'><img src={logo} alt="Weather Logo" /></li>
          <li className='nav-items'><a href='.'>MyWeather</a></li>
          <li className='nav-items'>{showData && <SearchBar search={search} handleSearch={handleSearch} handleClick={handleClick} handleKeyPress={handleKeyPress} />}</li>
        </ul>
      </nav>
      {!showData && <div id="App">
        <h1>Worldwide Weather at Your Fingertips</h1>
          <p>Please enter a city</p> 
          <SearchBar search={search} handleSearch={handleSearch} handleClick={handleClick} handleKeyPress={handleKeyPress}/>
          {showErrOne && 
            <p>Sorry, we can't seem to find the city you're looking for.
            <br/>Try using the format "City, State" or "City, Country."</p>          
          }
      </div>
      }
      {showData &&
        <div id="all-weather-parent">
          {showErrTwo && <label>Sorry, we can't seem to find the city you're looking for.
            <br/>Try using the format "City, State" or "City, Country."</label>}
          {showCurrent && <div id="display">
            <CurrentWeather
            time={moment.unix(apiData.dt).format('LT')}
            name={apiData.name} 
            country={apiData.sys.country}
            icon={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
            desc={capFirstLetter(apiData.weather[0].description)}
            high={Math.round(apiData.main.temp_max)}
            low={Math.round(apiData.main.temp_min)}
            humidity={apiData.main.humidity}
            uv={Math.round(nextWeekData.daily[0].uvi)}
            wind={nextWeekData.daily[0].wind_speed}
            pressure={apiData.main.pressure * .030}
            visibility={Math.round(apiData.visibility)}
            temp={Math.round(apiData.main.temp)}
            sunrise={moment.unix(apiData.sys.sunrise).utcOffset((apiData.timezone) / 60).format('LT')}
            sunset={moment.unix(apiData.sys.sunset).utcOffset((apiData.timezone) / 60).format('LT')} 
          />
          <NextWeekExpanded
            name={apiData.name}
            day={moment.unix(nextWeekData.daily[nextWeekIndex].dt).format('dddd')}
            date={moment.unix(nextWeekData.daily[nextWeekIndex].dt).format('MMM DD, YYYY')}
            high={Math.round(nextWeekData.daily[nextWeekIndex].temp.max)}
            low={Math.round(nextWeekData.daily[nextWeekIndex].temp.min)}
            desc={capFirstLetter(nextWeekData.daily[nextWeekIndex].weather[0].description)}
            icon={`http://openweathermap.org/img/wn/${nextWeekData.daily[nextWeekIndex].weather[0].icon}@2x.png`}
            humidity={nextWeekData.daily[nextWeekIndex].humidity}
            uv={nextWeekData.daily[nextWeekIndex].uvi}
            wind={nextWeekData.daily[nextWeekIndex].wind_speed}
            pressure={nextWeekData.daily[nextWeekIndex].pressure}
            dewPoint={nextWeekData.daily[nextWeekIndex].dew_point}
          />
          </div>
          } 
          <div id="forecast-div">
            <h2 className="smaller-header">7-day forecast</h2>
          </div>
          <div className="next-week-parent" onClick={handleNextWeekClick}>
            <WeatherThisWeek 
              id={1}
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
