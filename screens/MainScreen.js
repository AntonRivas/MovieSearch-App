import React from 'react'
import {View,StyleSheet, Button, Text,TextInput} from 'react-native'


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
    films: 'test'
  }
  static navigationOptions = {
    title: 'Movie Browser',
  };

  render(){
    return(
        <View style = {styles.container}>
          <TextInput style = {{width: '60%',height: '7%', fontSize: 20, textAlign: 'center'}} placeholder = 'Search Films'
            onChangeText = {text => {this.setState({films: text})}}/>
          <View style = {{height: '8%', width: '60%', padding:20 }}>
            <Button title = 'Go to Movie Info' onPress = {() => this.props.navigation.navigate('Movie', {films: this.state.films})}/>
          </View>
        </View>
      )
  }
}
