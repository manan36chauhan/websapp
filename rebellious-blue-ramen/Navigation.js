import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen3';
import Screen5 from './screens/Screen3';

import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library here

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
         <Tab.Screen name="Screen4" component={Screen4} />
        <Tab.Screen name="Screen5" component={Screen5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
