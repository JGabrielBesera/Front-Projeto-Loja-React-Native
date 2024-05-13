import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import ListCamisetas from './screens/ListCamisetas';
import CadastrarProduto from './screens/CadastrarProdutos';
import Favoritos from './screens/Favoritos';
import Perfil from './screens/Perfil';
import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CadastrarProduto"
          component={CadastrarProduto}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ListCamisetas"
          component={ListCamisetas}
          options={{
            headerShown: false
          }}
        />

        {/* <Stack.Screen
        name="CadastrarProduto"
        component={CadastrarProduto} 
        options={{
          headerShown: false
        }}
        /> */}

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#000' },
      headerTitleStyle: { color: "#FFF" },
      tabBarShowLabel: false
    }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="home" color={{ color: "#000" }} size={25} />
          )
        }}
      />
      <Tab.Screen name="perfil" 
      component={Perfil} options={{
        headerShown: false,
        tabBarIcon: () => (
          <Feather name="user" size={24} color="black" />
        )
      }} />
      <Tab.Screen name="favoritos" component={Favoritos} options={{
        headerShown: false,
        tabBarIcon: () => (
          <Feather name="heart" size={24} color="black" />
        )
      }} />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#aaaaaa',

  }

});
