import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: moderateScale(60), 
        width: dimensions.width * .85,
        backgroundColor: colors.black,
        borderRadius: moderateScale(30),
        shadowColor: colors.line,
        shadowOffset: {
            width: moderateScale(5),
            height: moderateScale(5),
        },
        shadowOpacity: .6 ,
        shadowRadius: moderateScale(5),
        overflow: "hidden",
        padding: moderateScale(10)
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
        marginLeft: moderateScale(5),
        color: colors.white
    },
    textName:{
        ...fontStyles.p2,
        color: colors.white
    },
    icon:{
        width: moderateScale(30),
        height: moderateScale(30),
        marginRight: moderateScale(10)
    },
    marginVertical:{
        marginVertical: moderateScale(15),
        width: dimensions.width * .9,
    },
    triangleCorner:{
        position: 'absolute',
        top:-moderateScale(5),
        left:0,
        width: dimensions.width * .45,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: moderateScale(50),
        borderTopWidth: moderateScale(70),
        borderRightColor: 'transparent',
        borderTopColor: colors.secondary
    }
})

module.exports = {
    styles
}