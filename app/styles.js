import { moderateScale } from 'react-native-size-matters'
import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';

//Colors
const primary = '#ED8256';
const secondary = '#EA6835';
const warning = '#D88C59';
const black = "#000";
const secondaryBlack = "#343434";
const line = "#666666";
const white = "#FFF";
const colorHP = "#CD817C";
const colorAttack = "#C78E63";
const colorDefense = "#D4C168";
const colorSpecialSttack = "#3C7CE4";
const colorSpecialDefense = "#95B875";
const colorSpeed = "#D17E98";
const fourteenPorcent = '#CCCCCC';

module.exports = {
    colors:{
        primary,
        secondary,
        black,
        warning,
        line,
        secondaryBlack,
        white,
        colorHP,
        colorAttack,
        colorDefense,
        colorSpecialSttack,
        colorSpecialDefense,
        colorSpeed,
        fourteenPorcent
    },
    fontStyles:{
        giga:{
            fontSize:moderateScale(64),
            fontWeight:"bold",
            color:black,
        },
        big:{
            fontSize:moderateScale(48),
            fontWeight:"bold",
            color:black,
        },
        h1:{
            fontSize:moderateScale(32),
            fontWeight:"bold",
            color:black,
        },
        h2:{
            fontSize:moderateScale(24),
            fontWeight:"bold",
            color:black,
        },
        h3:{
            fontSize:moderateScale(20),
            fontWeight:"bold",
            color:black,
        },
        h4:{
            fontSize:moderateScale(18),
            fontWeight:"bold",
            color:black,
        },
        h5:{
            fontSize:moderateScale(16),
            fontWeight:"bold",
            color:black,
        },
        h6:{
            fontSize:moderateScale(14),
            fontWeight:"bold",
            color:black,
        },
        h7:{
            fontSize:moderateScale(12),
            fontWeight:"bold",
            color:black,
        },
        p1:{
            fontSize:moderateScale(16),
            color:black,
        },
        p2:{
            fontSize:moderateScale(14),
            color:black,
        },
        p3:{
            fontSize:moderateScale(12),
            color:black,
        },
    },
    themeClasses:{
        container:{
            flex:1,
            backgroundColor:primary,
        },
        horizontalRow:{
            width:"100%",
            flexDirection: "row",
        },
        paddingTop:{
            paddingTop:getStatusBarHeight(true) ? getStatusBarHeight(true) + moderateScale(10) : moderateScale(5)
        },
        paddingBottom:{
            paddingBottom:getBottomSpace()
        },
        fullCenterAlign:{
            alignItems: 'center', 
            justifyContent: 'center'
        },
        marginHorizontal:{
            paddingHorizontal:moderateScale(10)
        },
    },
    dimensions:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    }
}
