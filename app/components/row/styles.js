import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;

let styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: moderateScale(40), 
        marginVertical: moderateScale(10),
    },
    title:{
        ...fontStyles.h5,
    },
    value:{
        ...fontStyles.h5,
        color: colors.white
    },
})

module.exports = {
    styles
}