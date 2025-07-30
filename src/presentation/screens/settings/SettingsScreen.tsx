import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {


  const navigator = useNavigation()
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom:20}}>
        Settings Screen!
      </Text>
      <PrimaryButton label='Regresar' onPress={() => navigator.goBack()} />
      <PrimaryButton label='Regresar al Home' onPress={() => navigator.dispatch(StackActions.popToTop())} />

    </View>
  )
}

export default SettingsScreen
