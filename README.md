# <div align="center">MyWeather</div>
## Description
MyWeather is a single-page web application built in React that pulls data from the OpenWeather API. A user searches a city and is shown the current weather along with the weather for the next seven days.

&nbsp;

![App demonstration.](/images/weather-example.gif?raw=true)

&nbsp;
### <div align="center">[Click Here for a Live Demo](https://bourdear.github.io/react-weather-app/)</div>
&nbsp;

## How to Use
* Input a city name and click the "Search" button.
* Click one of the seven condensed divs to get expanded weather information for that day.
* Search for a new city using the search bar at the top of the screen.

&nbsp;
# About the Project
## Working with Components
* In this project, multiple components are used to streamline development and prevent the reuse of code. 
* The "WeatherThisWeek" component is used seven times to display the weather for the upcoming week.
* The date, high temp, low temp, and description are displayed for each day. 

```
const WeatherThisWeek = ({ id, date, icon, high, low, desc }) => {
  return (
    <div className="daily-weather" id={id}>
      <p>{date}</p>
      <img src={icon} className='icon' alt="Weather icon."/>
      <p>{high} / {low} °F</p>
      <p>{desc}</p>
    </div>
  )
}
```
&nbsp;
## Handling Errors

&nbsp;

![App demonstration.](/images/weather-example2.gif?raw=true)

&nbsp;

* When a user searches for a city that cannot be found on the OpenWeather server, a 404 error is returned. 
* Try and Catch statements are used to handle 404 errors. 
* When a 404 error is caught, the `errMessage()` function, which conditionally renders an error message, is called and an error message is displayed. 

```
try {
  const currentWeatherInfo = await axios.get(apiURL)
  ...
}

catch(err) {
  if (err.response.status === 404) {
    errMessage()
  }
}
```
&nbsp;

## Conditional Rendering
* Components are conditionally rendered to show and hide data depending on the current state of a reference variable. 
* When the state of the `showData` variable is true, the weather data is displayed, when it is false, the data is hidden. 
```
{showData &&
    <div>...</div>
}
```
&nbsp;

## Handling Search Data
* The `handleSearch()` function checks if a user input includes a US state. 
* The function iterates through the input to check if there are two words. If true, the second word is set to lowercase and any whitespace is removed. 
* The word is then compared to an array of objects to see if it matches a US state or a US state abbreviation. If the word is a match, ", US" is added to the end of the search term to ensure that a US city is returned.
```
  const handleSearch = (event) => {
    setSearch(() => event.target.value)
    if (event.target.value.split(',')[1] !== undefined
     && event.target.value.split(',').length < 3) {
      const secondItem = (event.target.value.split(',')[1]).toLowerCase().trim()
      if (stateArr.some(i => i.name.toLowerCase().includes(secondItem))
         || stateArr.some(i => i.abbreviation.toLowerCase().includes(secondItem))) {
          setSearchTerm(() => `${event.target.value}, us`)
      }
    } else {
      setSearchTerm(() => event.target.value)
    }
  }
  ```
