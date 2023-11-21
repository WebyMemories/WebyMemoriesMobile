import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewArthur from './profiles/arthur/ViewArthur';
import ViewVitorHugo from './profiles/vitor/ViewVitorHugo';
import ViewIgor from './profiles/igor/ViewIgor';
import ViewZeca from './profiles/zeca/ViewZeca';
import ViewJosue from './profiles/josue/ViewJosue';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from '../Test';

const squareData = [
  { name: 'Arthur Bauer', image: require("../assets/arthur.png") },
  { name: 'Igor Moreno', image: require("../assets/igor2.jpeg") },
  { name: 'José Henrique', image: require("../assets/zeca2.jpeg") },
  { name: 'Josué Elias', image: require("../assets/josue.jpeg") },
  { name: 'Vitor Hugo', image: require("../assets/vitor.jpeg") },
  { name: 'Armando Mendez', image: require("../assets/armando.jpeg") },
  { name: 'Joédio', image: require("../assets/joedio.jpeg") },
  { name: 'Jeferson', image: require("../assets/jeferson.jpeg") },
  { name: 'Júnior', image: require("../assets/junior.jpeg") },
];

export default function SearchPage() {
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  const handleSquarePress = (name) => {
    if (name === 'Arthur Bauer'){
      navigation.navigate(ViewArthur, {nome: name});
    } else if (name === 'Vitor Hugo'){
      navigation.navigate(ViewVitorHugo);
    } else if (name === 'Igor Moreno'){
      navigation.navigate(ViewIgor);
    } else if (name === 'José Henrique'){
      navigation.navigate(ViewZeca);
    }else if (name === 'Josué Elias'){
      navigation.navigate(ViewJosue);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <View style={styles.textContainer}>
            <Text style={styles.textTop}>Escolha a biografia</Text>
            <Text style={styles.textTop}>que você deseja</Text>
          </View>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.squareRow}>
          {renderSquareRow(squareData.slice(0, 3), handleSquarePress)}
        </View>
        <View style={styles.squareRow}>
          {renderSquareRow(squareData.slice(3, 6), handleSquarePress)}
        </View>
        <View style={styles.squareRow}>
          {renderSquareRow(squareData.slice(6, 9), handleSquarePress)}
        </View>
      </View>
    </ScrollView>
  );
}

const renderSquareRow = (data, onPress) => {
  return data.map((item, index) => (
    <TouchableOpacity
      style={styles.column}
      key={index}
      onPress={() => onPress(item.name)}
    >
      <View style={styles.square}>
        <Image source={item.image} style={styles.squareImage} />
      </View>
      <Text style={styles.squareLabelText}>{item.name}</Text>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  content: {
    margin: '5%',
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  textContainer: {
    flex: 1,
  },
  logo: {
    width: '16%',
    height: '100%',
    marginLeft: '5%',
    marginBottom: '10%',
  },
  textTop: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: 'black',
  },
  squareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, // Ajuste para o espaçamento entre as linhas
  },
  column: {
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  squareLabelText: {
    color: 'white',
    marginTop: 10,
    fontSize: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Ajuste para o espaçamento inferior na ScrollView
  },
});
