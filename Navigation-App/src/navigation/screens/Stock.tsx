import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import productos from '../../mocks/products.json'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Product {
  id: string
  nombre: string
  descripcion: string
  cantidad: number
}

export function Stock() {
  const navigation = useNavigation<any>() //aca en ves del any tendria que ir un <NativeStackNavigationProp<RootStackParamList>> donde el RootStackParamList seria un type creado e importado con los datos que va a recibir la pantalla profile
  const [stock, setStock] = useState<Product[]>(productos)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-200 items-center'>
        <StatusBar style='dark' />
        <View className=' flex-1 w-full mt-1 '>
          <FlatList
            contentContainerStyle={{ paddingBottom: 55 }}
            data={stock}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              >
                <View className='bg-white p-4 mb-3 rounded-lg shadow-sm border-l-4 border-gray-900'>
                  <View className='flex-row justify-between items-center'>
                    <Text className='text-xl font-bold text-gray-800'>
                      {item.nombre}
                    </Text>
                    <Text className='text-gray-600 font-mono'>
                      Cant: {item.cantidad}
                    </Text>
                  </View>
                  <Text className='text-gray-500 mt-1'>{item.descripcion}</Text>
                </View>
              </TouchableOpacity>
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
