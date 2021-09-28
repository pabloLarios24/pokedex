// Component: card
// Developer: Pablo Larios 

import React from "react";
import {
    View,
    Text,
    Image
}from 'react-native'

//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente row con un titulo y su valor
   * @param {*} title  //String
   * @param {*} value   //String
   */
const Row = ({ title, value, style }) => {
    return (
        <View style={[styles.container, style ]}>
            <Text style={ styles.title }>{title}: </Text>
            <Text style={ styles.value }>{value}</Text>
        </View>
    )
}

export default Row;