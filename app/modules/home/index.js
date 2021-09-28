// View: Home
// Developer: Pablo Larios 
import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native'

//methods of api
import { httpRequest } from '../../services/api';
import NameRequest from '../../services/nameRequest';

//import components
import HeaderBar from '../../components/headerBar'
import Card from './components/card'
import CardSelect from './components/cardSelect'
import Spinner from 'react-native-loading-spinner-overlay'

let offset = 0;

//import styles 
const themeClasses = require('../../styles').themeClasses;
const styles = require('./styles').styles;

const Home = () => {

    const [refreshing , setRefreshing] = useState(false);
    const [isLoading , setisLoading] = useState(true);
    const [pokemons , setPokemons] = useState(Array());
    const [pokemonSelect , setPokemonSelect] = useState(null);

    useEffect(() => {
        init();
      }, 0);

    const getDetailPokemons = async (results) =>{
        const pokemons = Array();
        if(results.length){
            for( var i in results ){
                const request = await httpRequest(results[i].url);
                if( !request.code && request.base_experience ){
                    pokemons.push(request);
                }
            }
        }
        return pokemons
    }

    const init = async () => {
        offset = 0;
        const request = await httpRequest(NameRequest.listPokemons(20, offset));
        if( !request.code && request.count ){
            const pokemons = await getDetailPokemons(request.results);
            setPokemons(pokemons);
            setisLoading(false);
            setRefreshing(false);
        }
    }

    const _handleLoadMore = async () => {
        setisLoading(true);
        offset = offset + 20;
        const request = await httpRequest(NameRequest.listPokemons(20, offset));
        if( !request.code && request.count ){
            const pokemonsRequest = await getDetailPokemons(request.results);
            let pokemonsTem = pokemons;
            const pokemonsTem2 = pokemonsTem.concat(pokemonsRequest)
            console.log(pokemonsRequest, pokemonsTem2)
            setPokemons(pokemonsTem2);
            setisLoading(false);
        }
        setisLoading(false);
    };
    
    const _handleRefresh = async () => {
        setisLoading(true);
        setRefreshing(true);
        init();
    };

    const isPokemonSelect =  ( item ) => {
        if(pokemonSelect){
            if(pokemonSelect.id === item.id){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    const _renderItem = ({item, index}) =>{
        const flag = isPokemonSelect(item);
        if(flag){
            return (
                <CardSelect
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    imagePath={item.sprites.front_shiny}
                    pokemon={item}
                />
            )
        }else{
            return (
                <TouchableOpacity
                    onPress={async ()=>{
                        setPokemonSelect(item)
                    }}
                >
                    <Card
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        imagePath={item.sprites.front_shiny}
                    />
                </TouchableOpacity>
            )
        }
    }

    return(
        <View style={themeClasses.container}>
            <HeaderBar
                title="Pokedex"
            />
            <Spinner
                visible={isLoading}
            />
            <View style={styles.containerList}>

                        <FlatList
                            data={pokemons}
                            onEndReached={_handleLoadMore}
                            renderItem={_renderItem}
                            onRefresh={_handleRefresh}
                            refreshing={refreshing}
                            onEndReachedThreshold={Platform.OS === "ios" ? 0 : .5}
                        />

            </View>
            <View style={styles.containerImage}>
                <Image
                    style={styles.image}
                    source={pokemonSelect ? {uri: pokemonSelect.sprites.front_shiny} : require("../../src/icons/pokeball.png")}
                />
            </View>
        </View>
    )

}

export default Home;