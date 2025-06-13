import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from './screens/First';
import Second from './screens/Second';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='first' component={First}/>
        <Tabs.Screen name='second' component={Second}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
