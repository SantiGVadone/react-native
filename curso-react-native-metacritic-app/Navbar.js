import { View, StyleSheet } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Foundation from '@expo/vector-icons/Foundation'

export function Navbar() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.navbar}>
        <FontAwesome6 name='hand-paper' size={24} color='white' />
        <Foundation name='foot' size={24} color='white' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    height: 45,
    top: '45%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
