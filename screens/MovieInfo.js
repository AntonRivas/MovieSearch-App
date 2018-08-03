import React from 'react'
import {ScrollView, Image, View,Button, Text,TextInput} from 'react-native'
import ToFilm from '../ToFilm.js'


export default class MovieInfo extends React.Component {

  static navigationOptions = {
    title: 'Movie Info',
    headerTintColor: 'black',
    headerTransparent: false
  };


  render(){
    const {
      screenProps: {
        films,
        query
      }
    } = this.props

    return(
        <View style = {{height: '100%',alignItems:'center',paddingTop: 20, backgroundColor: 'white'}}>
          <Button title = 'Go to Main Menu' onPress = {() => this.props.navigation.navigate('Main')}/>
          <Text> {query}</Text>
          <ScrollView>
          {films.map(film => (<ToFilm title = {films.title} year = {films.year} poster = {films.poster} key = {films.key}/> ))}
          </ScrollView>
        </View>
        )
  }

}
