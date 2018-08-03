import React from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  filmContainer: {
    padding: 10
  }
})

const ToFilm = movies => {
  return(
    <View style = {styles.filmContainer}>
      <Image style={{width: 50, height: 50}} source = {{uri: movies.poster}}/>
      <Text>{movies.title}</Text>
      <Text>{movies.year}</Text>
    </View>
  )
}

export default ToFilm
