import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import ProductsScreen from '../screens/products/ProductsScreen'
import ProductScreen from '../screens/products/ProductScreen'


const Stack = createStackNavigator()

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
)