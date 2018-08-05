import React from 'react'
import {Vew,Text} from 'react-native'


export const fetchFilms = async (search) =>{
  try {
    const response = await fetch(`${'http://www.omdbapi.com/?apikey=9a4eeaf&s='}${search}`)
    const results = await response.json()
    const filmArray = results.Search//This gives us an array of objects, each object being a film with information
    const newArray = filmArray.map(processFilms)
    return newArray
  }
  catch(error){

  }
}
const processFilms =  obj => {
  return(
    {title: obj.Title, year: obj.Year, poster: obj.Poster, key: obj.imdbID}
  )
}

export const fetchInfo = async (title) =>{
  try {
    const response = await fetch(`${'http://www.omdbapi.com/?apikey=9a4eeaf&plot=full&t='}${title}`)
    const result = await response.json()
    const film = processFilm(result)
    console.log(film)
    return film
  }
  catch(error){ }
}

const processFilm =  obj => {
  return(
    {title: obj.Title, year: obj.Year, poster: obj.Poster, key: obj.imdbID, plot: obj.Plot, language: obj.Language, country: obj.Country}
  )
}
