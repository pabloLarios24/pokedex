// Component: Table of Abilities
// Developer: Pablo Larios 

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView
}from 'react-native'
import { moderateScale } from "react-native-size-matters";
import Spinner from 'react-native-loading-spinner-overlay'

//methods of api
import { httpRequest } from '../../../../services/api';

//import styles
const styles = require("./styles").styles;

//import components
import Table from '../table'

/**
   * Regresa componente de listado de habilidades del pokemon
   * @param {*} data   //Array de objetos { ability, url }
*/
const Moves = ({ data }) => {

    const [isLoading , setisLoading] = useState(true);
    const [ movesPk, setMovesPK ] = useState(Array());

    useEffect(() => {
        getDetailMove(data)
      }, 0);

    const getDetailMove = async (results) =>{
        const movesTem = Array();
        if(results){
            if(results.length){
                for( var i in results ){
                    const request = await httpRequest(results[i].move.url);
                    if( !request.code && request.id ){
                        for(var p in request.effect_entries){
                            if(request.effect_entries[p].language.name === "en"){
                                movesTem.push({
                                    title: request.name,
                                    value: request.effect_entries[p].effect
                                })
                            }
                        }
                    }
                }
            }
        }
        setMovesPK(movesTem);
        setisLoading(false);
    }

    return (
        <ScrollView contentContainerStyle={styles.paddingBottom}>
            <Spinner
                visible={isLoading}
            />
            <View style={styles.container}>
                <Text style={styles.textTitle}>Movimientos</Text>
                <Table
                    columns={[ "Movimiento", "Descripción" ]}
                    data={movesPk}
                />
            </View>
        </ScrollView>
    )
}

export default Moves;