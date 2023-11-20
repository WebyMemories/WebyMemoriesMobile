import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './components/SearchPage';
import ViewArthur from './components/profiles/arthur/ViewArthur'; 
import ViewVitorHugo from './components/profiles/vitor/ViewVitorHugo';
import ViewIgor from './components/profiles/igor/ViewIgor';
import ViewZeca from './components/profiles/zeca/ViewZeca';
import ViewJosue from './components/profiles/josue/ViewJosue';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
        }}
      >
        <Stack.Screen 
          name="Main" 
          options={{ headerShown: false }} 
          component={MainScreen} 
        />
        <Stack.Screen 
          name="SearchPage" 
          component={SearchPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ViewArthur"
          component={ViewArthur}
          options={{ 
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ViewVitorHugo"
          component={ViewVitorHugo}
          options={{ 
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ViewIgor"
          component={ViewIgor}
          options={{ 
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ViewZeca"
          component={ViewZeca}
          options={{ 
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="ViewJosue"
          component={ViewJosue}
          options={{ 
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/discos.png")} style={styles.discoStyle}/>
      <View style={styles.content}>
        <Image source={require("./assets/logo.png")} style={styles.logoStyle}/>
        <Text style={styles.nameStartup}>WebyMemories</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SearchPage')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignContent: "center",
    width: '100%',
    marginBottom: '100%',
    paddingHorizontal: 20,
    marginTop: "10%",
  },
  discoStyle:{
    width: "100%",
    height: "100%",
  },
  logoStyle:{
    width: "20%",
    height: "27%",
    marginTop: "10%",
    marginLeft: "40%",
  },
  nameStartup:{
    textAlign: "center",
    marginTop: "2%",
    fontSize: 40,
    color: "white",
  },
  loginButton: {
    backgroundColor: '#1ED760',
    borderRadius: 45,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: "10%",
  },
  loginButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Roboto",
  },
});
