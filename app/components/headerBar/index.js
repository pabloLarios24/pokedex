// Component HeaderBar
// Developer: Pablo Larios  
import { Icon } from 'native-base';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';


//import styles
const styles = require('./styles').styles;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;



const HeaderBar = ({title, notShow}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                {
                    notShow ?
                        null
                    :
                        <TouchableOpacity
                            
                            onPress={()=>{
                                Actions.pop()
                            }}
                        >
                            {/* <Icon
                                name={"arrow-left"}
                                type={"SimpleLineIcons"}
                                style={[styles.icon]}
                            /> */}
                            {/* <CustomIcon name={'arrow-left'} style={[styles.icon, color ? { color }: ""]} /> */}
                        </TouchableOpacity>
                }
                
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.title}>{title ? title : ''}</Text>
            </View>
            <View style={styles.containerHorizontal}/>
        </View>
    );
};

module.exports = HeaderBar;