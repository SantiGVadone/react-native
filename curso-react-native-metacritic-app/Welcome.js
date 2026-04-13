import { useState } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Textos, Titulos } from './const'
import { useFonts } from 'expo-font'

export const Welcome = () => {
  const [index, setIndex] = useState(1)
  const onPress = () => {
    setIndex(index + 1)
    if (index >= 5) {
      setIndex(0)
      //aca deberia ser un Navigate to -> HomePage, o algo asi
    }
  }

  const [fontsLoaded] = useFonts({
    poppins: require('./assets/fonts/poppins.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.appData}>
        <Image
          source={require('./assets/sin_fondo.png')}
          style={{ height: 200, resizeMode: 'contain' }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.titulos}>{Titulos[index]}</Text>
        <Text style={styles.textos}>{Textos[index]}</Text>
      </View>

      <TouchableHighlight
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor='#2d2d2d'
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  appData: {
    alignItems: 'center',
  },
  info: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  titulos: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'poppins',
    fontWeight: 900,
    textShadowColor: 'rgba(0, 48, 80, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    color: '#09f',
  },
  textos: {
    textAlign: 'center',
    fontSize: 22,
    color: '#d2d2d2',
    marginBottom: 45,
    fontFamily: 'poppins',
    textShadowColor: '#d2d2d250',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 40,
    color: '#09f',
    marginHorizontal: 50,
    fontFamily: 'poppins',
    textShadowColor: 'rgba(0, 48, 80, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
})
