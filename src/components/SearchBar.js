import './SearchBar.css'

import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function SearchBar() {
  const [term, setTerm] =useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()

    Navigate.push(`/search?q=${term}`)

  }

  return (
    <div className='searchbar' >
      <form onSubmit={handleSubmit}>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        onChange={(e) => setTerm(e.target.value)}
        required
        />
      </form>
    </div>
  )
}

export default SearchBar