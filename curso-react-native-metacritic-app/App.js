import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View } from 'react-native'
import { Navbar } from './Navbar'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
