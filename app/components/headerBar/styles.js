import { StyleSheet, Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
   container:{
       width: '100%',
       flexDirection: 'row',
       height: Platform.OS === "android" ? moderateScale(70) : moderateScale(90),
       backgroundColor: colors.secondaryBlack,
       ...themeClasses.paddingTop,
   },
   icon:{
       fontSize: moderateScale(25),
       marginHorizontal: moderateScale(5),
       color: colors.white
   },
   containerHorizontal:{
        flex:.2, 
        alignItems: 'center'
   },
   containerCenter:{
        flex:1, 
        ...themeClasses.fullCenterAlign
   },
   title:{
    ...fontStyles.h2, 
    color: colors.white
   }
})

module.exports = {
    styles
}