// View login
// Developer: Pablo Larios  
import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import ViewPager from '@react-native-community/viewpager';

//import components
import Shadow from '../../../../components/dynamicShadow'

//views
import Ability from '../abilities'
import Moves from '../moves'

//import styles
const styles = require('./styles').styles;

const bottomBar =  ({ data }) => {

    const [ currentPage, setCurrentPage ] = useState(0);
        
    const viewPager = useRef();

    const changePage = (page) => {
        viewPager.current.setPage(page);
        setCurrentPage(page);
    }

    const _handleHorizontalScroll = ({ nativeEvent }) => {  
        setCurrentPage(nativeEvent.position)
    };
    
    return(
        <View style={styles.container}>
            <ViewPager 
                ref={viewPager}
                onPageSelected={_handleHorizontalScroll}
                initialPage={0}
                style={styles.containerPage}
            >
                <View style={styles.containerPage}>
                    <Ability data={data.abilities}/>
                </View>
                <View style={styles.containerPage}>
                    <Moves data={data.moves}/>
                </View>
            </ViewPager>
            <View style={styles.continaerBar}>
                <Shadow 
                    removeTop 
                    style={styles.bottomBar}
                >
                    <View style={styles.subContainerBar}>
                        <TouchableOpacity 
                            onPress={()=>{
                                changePage(0)
                            }}
                            style={styles.containerButton}
                        >
                                {
                                    currentPage != 0 ?
                                        <Text style={styles.text}>Habilidades</Text>
                                    :
                                        <Text style={styles.textSelect}>Habilidades</Text>
                                }
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>{
                                changePage(1)
                            }}
                            style={styles.containerButton}
                        >
                                {
                                    currentPage != 1 ?
                                        <Text style={styles.text}>Movimientos</Text>
                                    :
                                        <Text style={styles.textSelect}>Movimientos</Text>
                                }
                        </TouchableOpacity>
                    </View>
                </Shadow>
            </View>
        </View>
    )
}

export default bottomBar;