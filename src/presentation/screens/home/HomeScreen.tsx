import {  Pressable, View } from 'react-native';
import { globalStyles } from '../../themes/theme';
import {DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParam } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { Text } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();
 useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ marginLeft: 10 }}
        >
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Profile')}
        label="Go to Profile"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Go to Products"
      />
    </View>
  );
};

export default HomeScreen;
