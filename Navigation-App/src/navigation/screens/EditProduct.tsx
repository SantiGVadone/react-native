import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useStock } from '../../hooks/useStock'

interface Product {
  id: number
  name: string
  description: string
  quantity: number
  category: string
}

export function EditProduct({ route }: any) {
  const { product } = route.params
  const [newProduct, setNewProduct] = useState(product)
  const navigation = useNavigation()
  const { editProduct } = useStock()

  return (
    <KeyboardAvoidingView className='flex-1'>
      <View className='flex-1 items-center justify-start bg-transparent/50'>
        <View className='bg-white h-1/2 w-3/4 mt-36 border-2 border-black shadow-black shadow-2xl rounded-3xl p-5  flex items-center align-middle'>
          <View className='flex-1 items-center justify-evenly'>
            <TextInput
              placeholder='Nombre'
              autoCorrect={false}
              showSoftInputOnFocus={true}
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, name: text })
              }
              value={newProduct.name}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, description: text })
              }
              value={newProduct.description}
            />
            <TextInput
              placeholder='Cantidad'
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) => {
                const valor = text === '' ? 0 : parseInt(text)
                if (!isNaN(valor)) {
                  setNewProduct({ ...newProduct, quantity: valor })
                }
              }}
              value={newProduct.quantity.toString()}
            />
          </View>
          <View className='mt-4 flex-row justify-evenly'>
            <TouchableOpacity
              onPress={() => {
                editProduct(newProduct)
              }}
              className='bg-blue-400 rounded-3xl m-2 shadow-xl shadow-black'
            >
              <Text className='color-gray-800 font-bold text-2xl p-4 text-center'>
                Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='bg-red-500 rounded-3xl m-2 shadow-xl shadow-black'
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Text className='color-gray-800 font-bold text-2xl p-4 text-center'>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
