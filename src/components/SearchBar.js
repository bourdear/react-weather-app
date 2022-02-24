import React from 'react'

const SearchBar = ({ search, handleSearch, handleClick, handleKeyPress}) => {
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="City, State or City, Country"
        onChange={handleSearch}
        onKeyPress={handleKeyPress}/>
        <input type="button" value="Search" onClick={handleClick}/>        
    </div>
  )
}

export default SearchBar