import { StaticScreenProps } from '@react-navigation/native'
import { View, Text } from 'react-native'

export function Profile() {
  return (
    <View className='flex-1 bg-gray-200 items-center justify-center'>
      <Text className='text-4xl color-gray-900'>Perfil de: Santiago</Text>
      <Text className='text-3xl color-gray-900 p-5'>Edad: 22</Text>
    </View>
  )
}
