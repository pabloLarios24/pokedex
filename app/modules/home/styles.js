import { StyleSheet } from 'react-native'
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
       height: moderateScale(90), 
       backgroundColor: colors.secondaryBlack,
       ...themeClasses.paddingTop,
   },
   containerList:{
       flex:.6,
       ...themeClasses.fullCenterAlign,
       ...themeClasses.marginHorizontal
   },
   containerImage:{
       flex:.4,
       ...themeClasses.fullCenterAlign
   },
   image:{
       width: moderateScale(120),
       height: moderateScale(120)
   }
})

module.exports = {
    styles
}