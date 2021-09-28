import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: dimensions.width * .95,
        marginVertical: moderateScale(10),
       
    },
    textTitle:{
        ...fontStyles.h5
    },
    containerRow:{
        borderBottomColor: colors.line,
        borderBottomWidth: 1,
        ...themeClasses.horizontalRow,

    },
    containerCell:{
        justifyContent: "center",
        flex:1,
        minHeight: moderateScale(40),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10)
    },
    textHeader:{
        ...fontStyles.h5,
        color: colors.white
    },
    textCell:{
        ...fontStyles.h6,
    }
})

module.exports = {
    styles
}