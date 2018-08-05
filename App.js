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

  render() {
    return (
      <AppNavigator/>
);
  }

}
