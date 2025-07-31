import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../themes/theme';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export function SideMenuNavigator() {

    const dimensions = useWindowDimensions();
  return (
    
    <Drawer.Navigator
        drawerContent={(props) => CustomDrawerContent(props)}// You can customize the drawer content here
        screenOptions={{
            drawerType: dimensions.width >= 768 ? 'permanent' : 'slide', // Use 'permanent' for larger screens

          headerShown: false,
          drawerStyle: {
            width: 250,
          },
          drawerActiveBackgroundColor: globalColors.primary,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor:globalColors.primary
        }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
        <View
            style= {{
                height: 200,
                backgroundColor: globalColors.primary,
                margin:30,
                borderRadius: 50,

            }}

        />

       <DrawerItemList {...props} /* This will render the default drawer items */ />

    </DrawerContentScrollView>
  );
}