import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Navigation } from './navigation/Navigation'

export function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}
