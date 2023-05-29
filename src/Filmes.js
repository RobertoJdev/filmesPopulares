import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image, List } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { TextInput } from 'react-native-gesture-handler';
import { useEffect } from "react";
//import { Link } from "react-router-dom";

import FlatComponent from './components/FlatComponent';
import { ScrollView } from 'react-native-gesture-handler';

const Filmes = () => {

  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhlN2Y4NmZmNWM2N2U0M2YxMGZhOTBjYjIwMjFjNSIsInN1YiI6IjY0NzI4MzcwYmUyZDQ5MDBmOTkzYmRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V640UbsocpRNuMNMDxwGZ98t2dlngly6z9xOtHbv9ag'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      //.then(json => console.log(json.results))
      .catch(err => console.error('error:' + err));

  }, [])

  return (
    <View style={styles.viewPrincipal}>
      <Text style={styles.titlePage}>Filmes mais Populares</Text>
      <ScrollView style={styles.container}>
        <View style={styles.View}>
          {
            movies.map(movie => {
              //console.log(movie);
              return (
                <FlatComponent data={movie} />
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default Filmes;

const styles = StyleSheet.create({

  container: {
    borderRadius: 10,
    //backgroundColor: 'gray',
  },
  titlePage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignContent: 'center',
    padding: 5,
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },
  View: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewPrincipal: {
    backgroundColor: 'white',

  }
});
