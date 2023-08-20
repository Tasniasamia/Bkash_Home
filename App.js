import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Homepage/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Scanner from './ComponentsAll/Scanner';
import Message from './ComponentsAll/Message';
import { Ionicons } from '@expo/vector-icons';
import Custombutton from './Custombutton/Custombutton';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
 

    <NavigationContainer>
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route}) => ({
        headerShown: false,
        tabBarIcon: ({  color, size,focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-sharp';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'qr-code-outline' : 'qr-code-sharp';
          } else if (route.name === 'Message') {
            iconName = focused ? 'mail-outline' : 'mail-sharp';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
          tabBarActiveTintColor: "#e11471",
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ]
        
      })}
    
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Scanner' component={Scanner} options={{tabBarButton:props=><Custombutton {...props}/>}} />
      <Tab.Screen name='Message' component={Message} />
    </Tab.Navigator>
  </NavigationContainer>
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
