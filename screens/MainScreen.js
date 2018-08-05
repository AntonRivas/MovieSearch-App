import React from 'react'
import {TouchableOpacity, View,StyleSheet, ScrollView, Button, Text,TextInput} from 'react-native'
import {fetchFilms} from '../api.js'
import ToFilm from '../ToFilm.js'

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'white',
    paddingTop: '5%',
    alignItems: 'center',
  },
})

export default class MainScreen extends React.Component {
  state = {
    films: [{title:'No results',key:'fake-key'}]
  }
  static navigationOptions = {
    title: 'Movie Browser',
  };

  render(){

    return(
        <View style = {styles.container}>
          <TextInput style = {{width: '60%',height: '7%', fontSize: 20, textAlign: 'center'}} placeholder = 'Search Films'
            onChangeText = {text => {this.getFilms(text)}}/>
          <ScrollView>
          {this.state.films.map(film => (
            <TouchableOpacity  key = {film.key} onPress = {() => {this.props.navigation.navigate('Movie', {title: film.title})}}>
              <ToFilm title = {film.title} year = {film.year} poster = {film.poster}/>
            </TouchableOpacity> ))}
          </ScrollView>
        </View>
      )
  }
  getFilms = async (search) => {
    if(search.length >= 3){
      const results = await fetchFilms(search)
        if(typeof results != 'undefined'){
          this.setState({films: results})
          console.log(this.state.films)
        }
        else{this.setState({films: [title: 'No results']})}
    }
  }
}
