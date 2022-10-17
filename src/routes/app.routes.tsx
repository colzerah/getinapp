import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Restaurant, Search} from '../pages';

const App = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName={'Home'}>
        <App.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            animation: 'fade',
            headerShown: false,
          }}
        />
        <App.Screen
          name="Search"
          component={Search}
          options={{
            animation: 'fade_from_bottom',
            headerShown: false,
          }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
