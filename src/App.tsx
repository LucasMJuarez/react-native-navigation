import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
// import { StackNavigator } from './presentation/routes/StackNavigator'
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator'
import { BottomTabNavigator } from './presentation/routes/BottomTabNavigator'

const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
        {/* <SideMenuNavigator /> */}
        <BottomTabNavigator/>
    </NavigationContainer> 
  )
}

export default App
