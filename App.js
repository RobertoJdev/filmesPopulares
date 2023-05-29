import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Filmes from './src/Filmes';
import Tela2 from './src/DetalhesFilme';

const StackNav = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Filmes} name="Filmes" />
        <StackNav.Screen component={Tela2} name="DetalhesFilme" />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
