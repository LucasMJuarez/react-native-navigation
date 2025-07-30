import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParam } from '../../routes/StackNavigator'
import { globalStyles } from '../../themes/theme'
import { useEffect } from 'react'

const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParam, 'Product'>>().params
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: `Product ${params.id}`,
    })
      
  }, [])
  return (
    <View style={globalStyles.container}>
      <Text>
        Product Screen
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>
        Product ID: {params.id} - {params.name} - ${params.price !== undefined ? params.price.toFixed(2) : 'N/A'}
      </Text>

    </View>
  )
}

export default ProductScreen