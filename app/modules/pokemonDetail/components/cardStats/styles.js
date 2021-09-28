import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: moderateScale(70),
        height: moderateScale(50),
        borderRadius: moderateScale(10),
        marginVertical: moderateScale(10),
        ...themeClasses.fullCenterAlign
    },
    textTitle:{
        ...fontStyles.h5
    },
    textValue:{
        ...fontStyles.h5,
        color: colors.white
    }
})

module.exports = {
    styles
}