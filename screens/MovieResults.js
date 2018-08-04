import React from 'react'
import {ScrollView, Image, View,Button, Text,TextInput} from 'react-native'
import ToFilm from '../ToFilm.js'


export default class MovieResults extends React.Component {

  static navigationOptions = {
    title: 'Movie Info',
    headerTintColor: 'black',
    headerTransparent: false
  };


  render(){
    let result = this.props.navigation.state.params.films
    console.log(result)
    return(
        <View style = {{height: '100%',alignItems:'center',paddingTop: 20, backgroundColor: 'white'}}>
          <Button title = 'Go to Main Menu' onPress = {() => this.props.navigation.navigate('Main')}/>
          <Text> Testing</Text>
          <ScrollView>
          {result.map(film => (<ToFilm title = {film.title} year = {film.year} poster = {film.poster} key = {film.key}/> ))}
          </ScrollView>
        </View>
        )
  }

}
