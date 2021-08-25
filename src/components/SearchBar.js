import React from 'react'

const SearchBar = ({ search, handleSearch, handleClick, showErr}) => {
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="City, State or City, Country"
        onChange={handleSearch}/>
        <input type="button" value="Search" onClick={handleClick}/>
        {showErr && <label>Sorry, we can't seem to find the city you're looking for.
            <br/>Try using the format "City, State" or "City, Country."</label>}
        
    </div>
  )
}

export default SearchBar