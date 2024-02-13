import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import ItemDetail from './src/screens/ItemDetail';
import CategoryDetails from './src/screens/CategoryDetails';
import COLORS from './global/colors';
import { useFonts } from 'expo-font';
import { FONTS } from './global/fonts';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <View><Text>Cargando...</Text></View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Lobster',
        },
      }}>
        <Stack.Screen name="Yapu App" component={Home} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="Detalle" component={ItemDetail} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


