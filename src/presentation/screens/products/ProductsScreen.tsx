import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import {type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParam } from '../../routes/StackNavigator'

const products = [
  { id: '1', name: 'Product 1', price: 10.99 },
  { id: '2', name: 'Product 2', price: 12.99 },
  { id: '3', name: 'Product 3', price: 15.99 },
  { id: '4', name: 'Product 4', price: 20.99 },
  { id: '5', name: 'Product 5', price: 25.99 },
]

const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>()
  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Productos
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', { id: item.id, name: item.name, price: item.price })}
            label={`${item.name} - $${item.price.toFixed(2)}`}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

            <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Ajustes
      </Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ir a Ajustes"
      />

    </View>
  )
}

export default ProductsScreen