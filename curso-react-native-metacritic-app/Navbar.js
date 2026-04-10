import { View, StyleSheet } from 'react-native'

export function Navbar() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.navbar}></View>
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
