import React from 'react'
import {Vew,Text} from 'react-native'


export const fetchFilms = async () =>{
  const response = await fetch(`${'http://www.omdbapi.com/?apikey=9a4eeaf&s='}${'Star'}`)
  const results = await response.json()
  const filmArray = results.Search//This gives us an array of objects, each object being a film with information
  const newArray = filmArray.map(processFilms)
  return newArray
}
const processFilms =  obj => {
  return(
    {title: obj.Title, year: obj.Year, poster: obj.Poster, key: obj.imdbID}
  )
}
