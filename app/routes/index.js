//Developer: Pablo Larios

import React, { Component } from 'react';
import { View } from 'react-native';
import { 
  Scene, 
  Router, 
  Stack 
} from 'react-native-router-flux';

//Import views
import Home from '../modules/home'
import PokemonDetail from '../modules/pokemonDetail'

//import styles 
const themeClasses = require('../styles').themeClasses;

export default class Routes extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <View style={themeClasses.container}>
        <Router>
          <Stack hideNavBar key="View">
            <Scene
              hideNavBar
              key="Home"
              back={false}
              component={Home}
              title="Home"
            />
            <Scene
              hideNavBar
              key="PokemonDetail"
              back={false}
              component={PokemonDetail}
              title="PokemonDetail"
            />
          </Stack>
        </Router>
      </View>
    );
  }
}
