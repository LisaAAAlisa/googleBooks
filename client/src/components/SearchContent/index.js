import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
//https://www.googleapis.com/books/v1/volumes?q=search+terms
const SearchContent = () => {
    const [search, setSearch] = useState("")

    function handleInputChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(search)

        API.getBooks(search)
            .then(res => console.log(res))
    }

    return (
        <div>
            <input type="text" name="input" onChange={handleInputChange} className="form-control form-control-lg" placeholder="Search for books here"/>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Search</button>
            <h1>{search}</h1>
        </div>
    )
}

export default SearchContent
