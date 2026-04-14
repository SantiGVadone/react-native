import { View, Text, StyleSheet } from 'react-native'
import { Navbar } from './Navbar'
import { useFonts } from 'expo-font'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const CalendarPage = () => {
  const insets = useSafeAreaInsets()
  const [fontsLoaded] = useFonts({
    poppins: require('../assets/fonts/poppins.ttf'),
    amertha: require('../assets/fonts/amertha.ttf'),
  })
  if (!fontsLoaded) {
    return <Text>Cargando...</Text>
  }

  return (
    <View
      style={[
        { paddingBottom: insets.bottom, paddingTop: insets.top },
        styles.container,
      ]}
    >
      <View style={styles.header}>
        <View></View>
        <Text style={{ color: 'white', fontSize: 30, fontFamily: 'poppins' }}>
          Abril 14
        </Text>
        <FontAwesome name='user-circle-o' size={45} color='white' />
      </View>

      <Text style={{ color: 'white', fontSize: 50, fontFamily: 'amertha' }}>
        Calendar Page
      </Text>
      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
})
