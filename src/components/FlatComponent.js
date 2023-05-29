import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

const FlatComponent = ({ data }) => {

    const image_path = 'https://image.tmdb.org/t/p/w500';

    //const [name, setName] = useState('');
    //const [idade, setIdade] = useState('');

    const navigation = useNavigation();

    const navegar = () => {
        navigation.navigate('DetalhesFilme', { data: data });
    }

    //console.log(data);

    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={navegar}>
            <Image source={{ uri: image_path + data.poster_path }} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default FlatComponent;

const styles = StyleSheet.create({
    touchableOpacity: {
        //flexDirection: 'column',
        margin: 10,
        alignContent: 'center',
        //backgroundColor: 'red',
        width: '40%',
        //borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: 5,
        //resizeMode: 'stretch'
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 15,
        //resizeMode: 'stretch',
    },
    view: {
        //backgroundColor: 'gray',
        //resizeMode: 'center',

        //aspectRatio: 1,     
    }
});
