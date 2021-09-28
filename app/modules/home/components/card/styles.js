import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        ...themeClasses.horizontalRow,
        height: moderateScale(60), 
        width: dimensions.width * .85,
        marginVertical: moderateScale(10),
       
    },
    containerHorizontal:{
        flex:1, 
        alignItems: "center",
        ...themeClasses.horizontalRow,
    },
    containerCenter:{
        flex:1, 
        ...themeClasses.fullCenterAlign
    },
    image:{
        width: moderateScale(45),
        height: moderateScale(45)
    },
    textId:{
        ...fontStyles.p2,
        marginLeft: moderateScale(5)
    },
    textName:{
        ...fontStyles.p2,
    },
    icon:{
        width: moderateScale(30),
        height: moderateScale(30),
        marginRight: moderateScale(10)
    }
})

module.exports = {
    styles
}