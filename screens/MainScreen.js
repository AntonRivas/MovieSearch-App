import React from 'react'
import {View,StyleSheet, Button, Text,TextInput} from 'react-native'
import {fetchFilms} from '../api.js'

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
    films: 'Tester'
  }
  static navigationOptions = {
    title: 'Movie Browser',
  };

  render(){
    const {
      screenProps: {
        setQuery
      }
    } = this.props
    return(
        <View style = {styles.container}>
          <TextInput style = {{width: '60%',height: '7%', fontSize: 20, textAlign: 'center'}} placeholder = 'Search Films'
            onChangeText = {text => {this.getFilms(text)}}/>
          <View style = {{height: '8%', width: '60%', padding:20 }}>
            <Button title = 'Go to Movie Info' onPress = {() => this.props.navigation.navigate('Movie', {films: this.state.films})}/>
          </View>
        </View>
      )
  }
  getFilms = async (search) => {
    const results = await fetchFilms(search)
    this.setState({films: results})
    console.log(this.state.films)
  }
}
