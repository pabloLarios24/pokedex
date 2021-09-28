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
        flex:.7,
        ...themeClasses.marginHorizontal
    },
    containerImage:{
        flex:.3,
        ...themeClasses.fullCenterAlign
    },
    image:{
        width: moderateScale(120),
        height: moderateScale(120)
    },
    containerBasicInfo:{
        flexDirection: "row"
    },
    containerOverLeft:{
        position: "absolute",
        left: moderateScale(10),
    
    },
    containerOverRight:{
        position: "absolute",
        right: moderateScale(10),
    
    }
})

module.exports = {
    styles
}