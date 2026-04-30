import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import { useStock } from '../../hooks/useStock'

interface Product {
  id: string
  name: string
  description: string
  quantity: number
  category: string
}

export function Stock() {
  const navigation = useNavigation<any>() //aca en ves del any tendria que ir un <NativeStackNavigationProp<RootStackParamList>> donde el RootStackParamList seria un type creado e importado con los datos que va a recibir la pantalla profile
  const { stock, loading, error, removeProduct, refresh } = useStock()

  const renderRightActions = (id: string) => {
    return (
      <TouchableOpacity
        onPress={() => removeProduct(id)}
        className='bg-red-500 justify-center items-center w-24 m-1 rounded-r-lg'
      >
        <Text className='text-white font-bold'>Eliminar</Text>
      </TouchableOpacity>
    )
  }
  if (loading) {
    return (
      <View className='flex-1 justify-center items-center bg-gray-200'>
        <ActivityIndicator size='large' color='#3b82f6' />
      </View>
    )
  }
  return (
    <SafeAreaView className='flex-1 bg-gray-200'>
      <View className='flex-1 bg-gray-200 items-center'>
        <StatusBar style='dark' />
        <View className=' flex-1 w-full'>
          <FlatList
            data={stock}
            onRefresh={refresh}
            refreshing={loading}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Swipeable renderRightActions={() => renderRightActions(item.id)}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                >
                  <View className='bg-white p-4 m-1 rounded-lg shadow-sm border-l-4 border-gray-900'>
                    <View className='flex-row justify-between items-center'>
                      <Text
                        className='text-xl font-bold flex-1 text-gray-800 mr-3'
                        numberOfLines={1} //hace que el texto no ocupe mas de una linea
                        ellipsizeMode='tail'
                      >
                        {item.name}
                      </Text>
                      <Text className='text-gray-600 font-mono'>
                        Cant: {item.quantity}
                      </Text>
                    </View>
                    <Text
                      className='text-gray-500 mt-1 text-sm'
                      numberOfLines={1}
                      ellipsizeMode='tail'
                    >
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            )}
          />
        </View>

        <View className='absolute bottom-6 right-6 w-fit rounded-full'>
          <TouchableOpacity
            activeOpacity={0.7}
            className='bg-blue-500 rounded-full'
            onPress={() => {
              navigation.navigate('AddProduct')
            }}
          >
            <Text className='color-white text-center text-5xl my-2 mx-5'>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
