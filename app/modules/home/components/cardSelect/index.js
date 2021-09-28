// Component: card select
// Developer: Pablo Larios 

import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native'
import { Actions } from "react-native-router-flux";

//import components
import Shadow from '../../../../components/dynamicShadow'

//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente tipo card del pokemon seleccionado
   * @param {*} imagePath  //String
   * @param {*} id   //Int
   * @param {*} name   //String
*/

const Card = ({ imagePath, id, name, pokemon}) => {
    return (
        <View style={styles.marginVertical}>
            <Shadow 
                style={styles.container}
                removeTop
            >
                <View style={styles.triangleCorner}/>
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
                <TouchableOpacity 
                    style={[styles.containerHorizontal, { justifyContent: "flex-end" }]}
                    onPress={()=>{
                        Actions.PokemonDetail({
                            pokemon: pokemon
                        })
                    }}
                >
                    <Image
                        style={styles.icon}
                        source={require("../../../../src/icons/pokeball-white.png")}
                        resizeMode={"cover"}
                    />
                </TouchableOpacity>
            </Shadow>
        </View>
    )
}

export default Card;