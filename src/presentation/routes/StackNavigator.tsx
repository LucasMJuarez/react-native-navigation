import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import ProductsScreen from '../screens/products/ProductsScreen'
import ProductScreen from '../screens/products/ProductScreen'
import SettingsScreen from '../screens/settings/SettingsScreen'
import { useNavigation } from '@react-navigation/native'




export type RootStackParam = {
    Home: undefined;
    Profile: undefined;
    Products: undefined;
    Product: { id:string; name: string; price?: number };
    Settings: undefined;
}

const Stack = createStackNavigator<RootStackParam>()

export const StackNavigator = () => {

  const navigator = useNavigation();

  useEffect(() => {
navigator.setOptions({
  headerShown: false,
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
});
  }, [navigator]);

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true, headerStyle:{
    elevation: 0, shadowColor: 'transparent'
  } }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />

  </Stack.Navigator>
  )
}