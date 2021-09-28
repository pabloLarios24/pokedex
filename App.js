/**
 * Test Bankaya
 * by: Pablo Larios
 */

import React from 'react';
import { 
  StatusBar, 
  View 
} from 'react-native'
import SplashScreen from 'react-native-splash-screen';

import Routes from './app/routes/index'

export default class App extends React.Component{
  constructor(){
    super()
  }

  componentDidMount(){
    SplashScreen.hide()
 }

  render(){
    return(
        <View style={{flex:1}}>
          <StatusBar 
            backgroundColor={'white'}
            barStyle={'dark-content'}
          />
          <Routes/>
        </View>
    )
  }
}
