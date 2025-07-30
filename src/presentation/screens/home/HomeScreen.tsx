import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Profile' as never)}
        label="Go to Profile"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Go to Products"
      />
    </View>
  );
};

export default HomeScreen;
