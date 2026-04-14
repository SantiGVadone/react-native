import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Octicons from '@expo/vector-icons/Octicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Navbar() {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.contenedor, { paddingBottom: insets.bottom }]}>
      <View style={styles.navbar}>
        <Ionicons name='calendar' size={30} color='white' />
        <Ionicons name='add' size={35} color='white' />
        <Octicons name='home-fill' size={30} color='white' />
        <Octicons name='graph' size={30} color='white' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d1d1d',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})
