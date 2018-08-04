import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './screens/MainScreen.js'
import MovieResults from './screens/MovieResults.js'


const AppNavigator = createStackNavigator({
  Main: MainScreen,
  Movie: MovieResults
  },
  {initialRouteName: "Main"}
  );

export default class App extends React.Component {
  state = {
    films: null,
    query: 'Testing'
  }
  // componentDidMount() {
  //   this.getFilms()
  // }
  // getFilms = async () => {
  //   const results = await fetchFilms(this.state.query)
  //   this.setState({films: results})
  //   console.log(this.state.films)
  // }
  render() {
    return (
      <AppNavigator screenProps = {{films: this.state.films, query: this.state.query, setQuery: this.setQuery}}/>
);
  }
  // setQuery = (search) =>{
  //   return(
  //     this.setState({query: search})
  //   )
  // }
}
