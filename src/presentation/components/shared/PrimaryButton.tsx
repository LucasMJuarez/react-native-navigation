import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../themes/theme'



interface NavigationProps {
onPress: () => void;   
label: string;
}
export const PrimaryButton = ({onPress, label}: NavigationProps) => {
  return (
      <Pressable 
      onPress={onPress}
      style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>
          {label}
        </Text>
      </Pressable>
  )
}


