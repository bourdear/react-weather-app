import React from 'react'

const SearchBar = ({ search, handleSearch, handleClick}) => {
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="City, State or City, Country"
        onChange={handleSearch} />
        <input type="button" value="Search" onClick={handleClick} />
    </div>
  )
}

export default SearchBar