import React from 'react'
import {ScrollView, Image, View,Button, Text,TextInput} from 'react-native'
import {FilmResult} from '../ToFilm.js'
import {fetchInfo} from '../api.js'

export default class MovieResults extends React.Component {
  state = {
    result: ''
  }
  static navigationOptions = {
    title: 'Movie Info',
    headerTintColor: 'black',
    headerTransparent: false
  };

  componentDidMount(){
    const search = this.props.navigation.state.params.title
    this.getFilm(search)
  }
  render(){
    return(
        <View style = {{height: '100%',alignItems:'center',paddingTop: 20, backgroundColor: 'white'}}>
        <FilmResult film = {this.state.result} />
        </View>
        )
  }

  getFilm = async (sear) => {
    const result = await fetchInfo(sear)
    this.setState({result: result})
    console.log(this.state.result)
  }
}
