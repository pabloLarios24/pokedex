// Component: Card stats
// Developer: Pablo Larios 

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView
}from 'react-native'


//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente card con la info de la estadistica
   * @param {*} stat   //Aobjetos
*/
const CardStat = ({ stat }) => {

    return (
        <View style={[styles.container, { backgroundColor: stat.color }]}>
            <Text style={styles.textTitle}>{stat.title}</Text>
            <Text style={styles.textValue}>{stat.value}</Text>
        </View>
    )
}

export default CardStat;