import React from 'react'
import {ScrollView,View,Image,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 7,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  filmContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  filmChild:{
    fontSize: 15,
    padding: 3
  }
})

const ToFilm = movies => {
  return(

      <View style = {styles.searchContainer}>
      <Image style={{width: 60, height: 100}} source = {{uri: movies.poster}}/>
      <Text>{movies.title}</Text>
      <Text>  {movies.year}</Text>
      </View>
  )
}
export const FilmResult = prop => {
  return(

      <ScrollView>
      <View style = {styles.filmContainer}>
      <View style = {{backgroundColor: 'white'}}>
      <Image style={{height: 230, width: 150 }} source = {{uri: prop.film.poster}}/>
      </View>
      <Text style = {{fontSize: 20, padding: 10}}>{prop.film.title}</Text>
      <Text style = {styles.filmChild}>Year: {prop.film.year}</Text>
      <Text style = {styles.filmChild}>Country: {prop.film.country}</Text>
      <Text style = {styles.filmChild}>Language: {prop.film.language}</Text>
      <Text style = {{fontSize: 20, padding: 10, textAlign: 'left'}}>Synopsis:</Text>
      <Text style = {{fontSize: 16, paddingHorizontal: 7, fontFamily: 'Roboto'}}>{prop.film.plot}</Text>
      </View>
      </ScrollView>

  )
}
export default ToFilm
