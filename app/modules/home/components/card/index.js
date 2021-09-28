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
   * Regresa componente tipo card del pokemon
   * @param {*} imagePath  //String
   * @param {*} id   //Int
   * @param {*} name   //String
*/

const Card = ({ imagePath, id, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                <Image
                    style={styles.image}
                    source={{uri: imagePath}}
                    resizeMode={"cover"}
                />
                <Text style={styles.textId}>No {id}</Text>
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textName}>{name.toUpperCase()}</Text>
            </View>
            <View style={[styles.containerHorizontal, { justifyContent: "flex-end" }]}>
                <Image
                    style={styles.icon}
                    source={require("../../../../src/icons/pokeball.png")}
                    resizeMode={"cover"}
                />
            </View>
        </View>
    )
}

export default Card;