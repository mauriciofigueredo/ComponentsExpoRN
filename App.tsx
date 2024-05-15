import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/presentation/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
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
