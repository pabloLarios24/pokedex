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
   * @param {*} data   //Array de objetos 
*/
const Abilities = ({ data }) => {

    const [ abilitiesPk, setAbilitiesPK ] = useState(Array());
    const [isLoading , setisLoading] = useState(true);

    useEffect(() => {
        getDetailAbilities( data )
      }, 0);

    const getDetailAbilities = async (results) =>{
        const abilitiesTem = Array();
        if(results){
            if(results.length){
                for( var i in results ){
                    const request = await httpRequest(results[i].ability.url);
                    if( !request.code && request.id ){
                        for(var p in request.effect_entries){
                            if(request.effect_entries[p].language.name === "en"){
                                console.log(request, "show")
                                abilitiesTem.push({
                                    title: request.name,
                                    value: request.effect_entries[p].effect
                                })
                            }
                        }
                    }
                }
            }
        }
        setAbilitiesPK(abilitiesTem);
        setisLoading(false);
    }

    return (
        <ScrollView contentContainerStyle={styles.paddingBottom}>
            <Spinner
                visible={isLoading}
            />
            <View style={styles.container}>
                <Text style={styles.textTitle}>Habilidades</Text>
                <Table
                    columns={[ "Habilidad", "Descripción" ]}
                    data={abilitiesPk}
                />
            </View>
        </ScrollView>
    )
}

export default Abilities;