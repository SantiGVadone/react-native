import { useState } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { Textos, Titulos } from './const'

export const Welcome = () => {
  const [index, setIndex] = useState(1)
  const onPress = () => {
    setIndex(index + 1)
    if (index >= 5) {
      setIndex(0)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeData}>
        <Text style={styles.welcome}>Bienvenido a MiTurno</Text>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/568/763/png-transparent-apple-logo-apple-logo-company-heart-logo.png',
          }}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
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
  },
  welcomeData: {
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 40,
    color: 'blue',
  },
  info: {
    justifyContent: 'center',
  },
  titulos: {
    textAlign: 'center',
    fontSize: 28,
    color: '#b2c6e0',
    paddingBottom: 10,
  },
  textos: {
    textAlign: 'center',
    fontSize: 18,
    color: '#d2d2d2',
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
  },
})
