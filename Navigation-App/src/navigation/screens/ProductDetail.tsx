import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import productos from '../../mocks/products.json'

interface Product {
  id: string
  nombre: string
  descripcion: string
  cantidad: number
}

export const ProductDetail = ({ route }: any) => {
  const navigation = useNavigation()
  const { product } = route.params
  const [stock, setStock] = useState<Product[]>(productos)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View className='w-full items-end p-4'>
          <TouchableOpacity
            onPress={() => {
              ;(navigation.navigate as any)('EditProduct', { product })
            }}
          >
            <Feather name='edit' size={30} color='black' />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        <View className='flex-1'>
          {/* Aca va la imagen */}
          <View className='w-full items-center'>
            <View className='h-56 w-56 bg-gray-800 shadow-xl rounded-xl shadow-black items-center justify-center'>
              <Text className='color-white text-center'>
                Aca va a ir la Imagen
              </Text>
            </View>
          </View>

          {/*Aca va el resto del contenido */}
          <View className='flex-1 justify-between py-10'>
            {/*Conjunto de nombre y descripcion*/}
            <View className='items-center'>
              <Text className='color-gray-800 text-4xl font-bold text-center mb-5'>
                {product.nombre}
              </Text>
              <View className='w-full items-center'>
                <View className='w-5/6 '>
                  <Text className='text-2xl text-center'>
                    {product.descripcion}
                  </Text>
                </View>
              </View>
            </View>
            {/* Conjunto para la cantidad */}
            <View className='items-center'>
              <View className='flex-row items-center bg-slate-300 rounded-full px-6 py-2'>
                <TouchableOpacity onPress={() => console.log('Cantidad - 1')}>
                  <Text className='text-5xl'> - </Text>
                </TouchableOpacity>
                <Text className='text-4xl font-bold px-8'>
                  {product.cantidad}
                </Text>
                <TouchableOpacity onPress={() => console.log('Cantidad + 1')}>
                  <Text className='text-5xl text-center rounded-full'> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
