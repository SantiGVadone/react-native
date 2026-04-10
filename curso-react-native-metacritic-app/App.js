import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import Main from './Components/Main'
import { Welcome } from './Welcome'
//para aprender react-native lo que vamos a hacer es una app que muestre en pantalla peliculas o juegos o algo

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style='light' />
        {/*<Main /> */}
        <Welcome />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    maxWidth: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
