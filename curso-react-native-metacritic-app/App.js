import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'

import icon from './assets/icon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        //blurRadius={5} //esta es para hacer el desenfoque
        //source={icon}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLLQW6wvaLT1JJh5ZASuIMSfPoEfjj30sHQ3UDKqlhsB-j0yYSpx8Dx_K30kKIYtsYJNsVmF8gwsw_KqkCw64e6Kc8g8MFtHl3dBRP85Z&s=10',
        }}
        style={{ width: 350, height: 350, resizeMode: 'center' }} //IMPORTANTE las imagenes que sacamos de la web, SIEMPRE hay que informar el width y la height
        //fadeDuration={} si te pones arriba de esta propiedad te dice @platform android(osea que es solo para androird)
      />
      <Text style={{ color: 'white' }}>
        Este es el archivo de entrada de la APP
      </Text>
      <StatusBar style='light' />
      {/*esto de StatusBar lo que cambia es el color del reloj/bateria y mas cosas que tengas en la barra de arriba*/}
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
