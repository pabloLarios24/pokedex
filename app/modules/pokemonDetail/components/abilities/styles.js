import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: dimensions.width * 85,
        marginVertical: moderateScale(10),
       
    },
    textTitle:{
        ...fontStyles.h5
    },
    paddingBottom:{
        paddingBottom: moderateScale(160)
    }
})

module.exports = {
    styles
}