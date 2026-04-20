import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Home from './components/Home';
import Profile from './components/Profile';

import './global.css';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: { title: 'Welcome' },
    },
    Profile: {
      screen: Profile,
      options: { title: 'Profile' },
    },
  },
});

const Navigate = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Navigate />
    </SafeAreaProvider>
  );
}
