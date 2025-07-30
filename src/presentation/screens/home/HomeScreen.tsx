import {  View } from 'react-native';
import { globalStyles } from '../../themes/theme';
import {type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParam } from '../../routes/StackNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();

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
