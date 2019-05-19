import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import MainScreen from './screens/MainScreen.js'
import MovieResults from './screens/MovieResults.js'


const MainNavigator = createStackNavigator({
  Main: MainScreen,
  Movie: MovieResults
  },
  {initialRouteName: "Main"}
  );

const AppNavigator = createAppContainer(MainNavigator);

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
