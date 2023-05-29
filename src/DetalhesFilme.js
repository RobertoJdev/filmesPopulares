import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';

//const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const DetalhesFilme = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  const navegar = () => {
    navigation.navigate('Filmes');
  }
  const voltar = () => {
    navigation.goBack();
  };

  const image_path = 'https://image.tmdb.org/t/p/w500';

  return (

    <View style={styles.container}>
      <Image resizeMode='contain' source={{ uri: image_path + data.poster_path }} style={{ width: 400, height: 400 }} />
      <Text style={styles.nome}>{data.title}</Text>
      <Text style={styles.detalhes}>Lançamento: {data.release_date}</Text>
      <Text style={styles.detalhes}>Estilo: {data.genre_ids}</Text>
      <Text style={styles.detalhes}>Direção: {data.direcao}</Text>
      <Text style={styles.sinopse}>Sinopse: {data.overview}</Text>
    </View>

  );
}

export default DetalhesFilme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  detalhes: {
    fontSize: 20,
  },
  sinopse: {
    padding: 15,
    textAlign: 'justify',
    fontSize: 15,
  }
});
