import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../themes/theme';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: globalColors.background, borderTopWidth: 0, elevation: 0 },
            tabBarLabelStyle:{
                marginBottom: 5,
            },
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
                borderColor: 'transparent',
            },
        }}
    >
      <Tab.Screen name="Tab1" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={{title: 'Tab3'}} component={Tab3Screen} />
    </Tab.Navigator>
  );
}