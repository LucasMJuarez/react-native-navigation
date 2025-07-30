import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../themes/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const products = [
  { id: '1', name: 'Product 1', price: 10.99 },
  { id: '2', name: 'Product 2', price: 12.99 },
  { id: '3', name: 'Product 3', price: 15.99 },
  { id: '4', name: 'Product 4', price: 20.99 },
  { id: '5', name: 'Product 5', price: 25.99 },
]

const ProductsScreen = () => {



  const navigation = useNavigation()
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
            onPress={() => navigation.navigate('Product' as never)}
            label={`${item.name} - $${item.price.toFixed(2)}`}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

            <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Ajustes
      </Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ir a Ajustes"
      />

    </View>
  )
}

export default ProductsScreen