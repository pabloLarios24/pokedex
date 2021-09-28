import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: "100%", 
        height: "100%"
       
    },
    textTitle:{
        ...fontStyles.h5
    },
    containerPage:{
        flex:1
    },
    subContainerBar:{ 
        width: dimensions.width*.9, 
        flexDirection: "row"
    },
    bottomBar:{
        width:dimensions.width,
        height:moderateScale(130),
        borderRadius: moderateScale(50),
        shadowColor: colors.line,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .2 ,
        shadowRadius: moderateScale(10),
        backgroundColor: colors.secondary
    },
    continaerBar:{
        position:'absolute',
        bottom:-moderateScale(0),
        left:- moderateScale(10)
    },
    containerButton:{
        flex:1, 
        ...themeClasses.fullCenterAlign, 
        height: moderateScale(60)
    },
    text:{
        ...fontStyles.h5
    },
    textSelect:{
        ...fontStyles.h5,
        color: colors.white
    }
})

module.exports = {
    styles
}