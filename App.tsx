import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Dashboard from './src/pages/Dashboard';
import FlatListPage from './src/pages/FlatListPage';
import ScrollViewPage from './src/pages/ScrollViewPage';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Dashboard'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="FlatListPage" component={FlatListPage} />
          <Stack.Screen name="ScrollViewPage" component={ScrollViewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
