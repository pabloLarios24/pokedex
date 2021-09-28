// View: Pokemon Detail
// Developer: Pablo Larios 
import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Image
} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import Spinner from 'react-native-loading-spinner-overlay'

//import components
import HeaderBar from '../../components/headerBar'
import Row from '../../components/row'
import BottomBar from './components/bottomBar';
import CardStat from './components/cardStats'

//import styles 
const themeClasses = require('../../styles').themeClasses;
const styles = require('./styles').styles;
const colors = require('../../styles').colors;

const PokemonDetail = ({ pokemon }) => {

    const [ statsHP, setStatsHP ] = useState(null);
    const [ statsAtt, setStatsAtt ] = useState(null);
    const [ statsDf, setStatsDf ] = useState(null);
    const [ statsSA, setStatsSA ] = useState(null);
    const [ statsSD, setStatsSD ] = useState(null);
    const [ statsSP, setStatsSP ] = useState(null);

    
    useEffect(() => {
        getDetailStat(pokemon.stats)
    }, 0);
    
    const getDetailStat = async (results) =>{
        const statsTem = Array();
        if(results){
            if(results.length){
                for( var i in results ){
                    switch(results[i].stat.name){
                        case "hp":
                            setStatsHP({
                                value: results[i].base_stat,
                                title: "PS",
                                color: colors.colorHP
                            });
                        case "attack":
                            setStatsAtt({
                                value: results[i].base_stat,
                                title: "ATQ",
                                color: colors.colorAttack
                            });
                        case "defense":
                            setStatsDf({
                                value: results[i].base_stat,
                                title: "DEF",
                                color: colors.colorDefense
                            });
                        case "special-attack":
                            setStatsSA({
                                value: results[i].base_stat,
                                title: "A.ESP",
                                color: colors.colorSpecialSttack
                            });
                        case "special-defense":
                            setStatsSD({
                                value: results[i].base_stat,
                                title: "D.ESP",
                                color: colors.colorSpecialDefense
                            });
                        case "speed":
                            setStatsSP({
                                value: results[i].base_stat,
                                title: "VEL",
                                color: colors.colorSpeed
                            });
                    }
                }
            }
        }
    }



    return(
        <View style={themeClasses.container}>
            <HeaderBar
                title={pokemon.name.toUpperCase()}
            />
            <View style={styles.containerImage}>
                <View style={styles.containerOverLeft}>
                    {
                        statsHP ?   
                            <CardStat
                                stat={statsHP}
                            />
                        :
                            null
                    }
                    {
                        statsAtt ?   
                            <CardStat
                                stat={statsAtt}
                            />
                        :
                            null
                    }
                    {
                        statsDf ?   
                            <CardStat
                                stat={statsDf}
                            />
                        :
                            null
                    }
                </View>
                <View style={styles.containerOverRight}>
                    {
                        statsSA ?   
                            <CardStat
                                stat={statsSA}
                            />
                        :
                            null
                    }
                    {
                        statsSD ?   
                            <CardStat
                                stat={statsSD}
                            />
                        :
                            null
                    }
                    {
                        statsSP ?   
                            <CardStat
                                stat={statsSP}
                            />
                        :
                            null
                    }
                </View>
                <Image
                    style={styles.image}
                    source={pokemon ? {uri: pokemon.sprites.front_shiny} : require("../../src/icons/pokeball.png")}
                />
            </View>
            <View style={styles.containerList}>
                <View style={styles.containerBasicInfo}>
                    <ScrollView
                        horizontal={true}
                    >
                            <Row
                                title={"Altura"}
                                value={pokemon.height}
                            />
                            <Row
                                title={"Peso"}
                                value={pokemon.weight}
                                style={{marginLeft: moderateScale(15)}}
                            />
                            <Row
                                title={"Experencia base"}
                                value={pokemon.base_experience}
                                style={{marginLeft: moderateScale(15)}}
                            />
                    </ScrollView>
                </View>
                <BottomBar data={pokemon}/>
            </View>
        </View>
    )

}

export default PokemonDetail;