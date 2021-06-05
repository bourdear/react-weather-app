import './App.css';
import CurrentWeather from './components/CurrentWeather'
import React, {useState} from 'react'
import axios from 'axios'
import moment from 'moment'
import apiKey from './openWeatherKey'

function App() {
  const [search, setSearch] = useState('')
  const [apiData, setApiData] = useState([])
  const [showData, setShowData] = useState(false)
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?zip=${search}&appid=${apiKey}&units=imperial`

  const handleSearch = (event) => {
    setSearch(event.target.value)
}

  const getData = () => {
    axios.get(apiURL)
    .then((response) => setApiData(response.data))
    .then(() => setShowData(true))
    .catch(error => {
      console.log("That didn't work")
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
    getData()
    setSearch('')
  }

  const capFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="App">
      <h1>How's the Weather?</h1>
      <div>
        Input Zip Code <input
        value={search}
        onChange={handleSearch} />
        <button onClick={handleClick}>Search</button>
      </div> {showData &&
        <CurrentWeather
          dateTime={moment.unix(apiData.dt).format('LLL')}
          name={apiData.name} 
          desc={capFirstLetter(apiData.weather[0].description)}
          temp={Math.round(apiData.main.temp)}
          feelsLike={Math.round(apiData.main.feels_like)}
          sunrise={moment.unix(apiData.sys.sunrise).format('LT')}
          sunset={moment.unix(apiData.sys.sunset).format('LT')} 
        />      
      }  
    </div>
  );
}

export default App;
