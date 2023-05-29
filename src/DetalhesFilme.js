import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/drawer';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

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

  const dataOriginal = data.release_date;
  //const dataFormatada = data.release_date;
  const dataFormatada = format(new Date(dataOriginal), 'dd/MM/yyyy');
  //const formattedDate = format(date, 'dd/MM/yyyy');


  return (

    <View style={styles.container}>
      <Image resizeMode='contain' source={{ uri: image_path + data.poster_path }} style={{ width: 400, height: 400 }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.detalhes}>Lançamento: {dataFormatada}</Text>
      <Text style={styles.sinopse}><Text style={styles.sinopseText}>Sinopse:</Text> {data.overview}</Text>
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
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
  },
  detalhes: {
    fontSize: 20,
  },
  sinopse: {
    padding: 15,
    textAlign: 'justify',
    fontSize: 15,
  },
  sinopseText: {
    padding: 15,
    textAlign: 'justify',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
