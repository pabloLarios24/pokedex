// Component: Table
// Developer: Pablo Larios 

import React from "react";
import {
    View,
    Text,
}from 'react-native'

//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente tipo tabla
   * @param {*} columns   //Array de string
   * @param {*} data   //Array de objetos { title, value }
   * @param isStats   //Flag indica si lo que se va a mapear son estadisticas
*/
const Table = ({ columns, data, isStats}) => {

    const _renderColumns = ( item ) => {
        return (
            <View style={styles.containerCell}>
                <Text style={styles.textHeader}>{item}</Text>
            </View>
        )
    }

    const _renderRows = ( item ) => {
        return (
            <View style={styles.containerRow}>
                <View style={styles.containerCell}>
                    <Text style={styles.textCell}>{item.title}</Text>
                </View>
                <View style={styles.containerCell}>
                    <Text ellipsizeMode={"tail"} style={styles.textCell}>{item.value}</Text>
                </View>
                {
                    isStats ?
                    <View style={styles.containerCell}>
                        {
                            item.characteristic.length ?
                                    item.characteristic.map((characteristic)=>(
                                        <Text ellipsizeMode={"tail"} style={styles.textCell}>{characteristic}</Text>
                                    ))
                                :
                                    null
                        }
                        </View>
                    :
                        null
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                {
                    columns ? 
                        columns.length ?
                            columns.map(_renderColumns)
                        : 
                            null
                    :
                        null
                }
            </View>
            {
                    data ? 
                        data.length ?
                            data.map(_renderRows)
                        : 
                            null
                    :
                        null
                }
        </View>
    )
}

export default Table;