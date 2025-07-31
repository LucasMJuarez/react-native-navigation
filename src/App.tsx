import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
// import { StackNavigator } from './presentation/routes/StackNavigator'
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator'

const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
        <SideMenuNavigator />
    </NavigationContainer>
  )
}

export default App
