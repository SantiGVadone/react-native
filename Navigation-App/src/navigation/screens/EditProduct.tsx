import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

interface Product {
  id: string
  nombre: string
  descripcion: string
  cantidad: number
}

export function EditProduct({ route }: any) {
  const { product } = route.params
  const [newProduct, setNewProduct] = useState(product)
  const navigation = useNavigation()

  const handleSubmit = () => {
    if (!newProduct.nombre || !newProduct.descripcion || !newProduct.cantidad) {
      alert('Necesitas completar todos los campos')
      navigation.goBack()
      return
    }
    console.log('Tengo que remplazar esto:------')
    console.log('Producto que llega', product)
    console.log('Por esto: ---------------------')
    console.log('Producto que devuelve', newProduct)
    navigation.goBack()
  }
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
                setNewProduct({ ...newProduct, nombre: text })
              }
              value={newProduct.nombre}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, descripcion: text })
              }
              value={newProduct.descripcion}
            />
            <TextInput
              placeholder='Cantidad'
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) => {
                const valor = text === '' ? 0 : parseInt(text)
                if (!isNaN(valor)) {
                  setNewProduct({ ...newProduct, cantidad: valor })
                }
              }}
              value={
                newProduct.cantidad === 0 && newProduct.cantidad !== undefined
                  ? ''
                  : newProduct.cantidad.toString()
              }
            />
          </View>
          <View className='mt-4 flex-row justify-evenly'>
            <TouchableOpacity
              onPress={handleSubmit}
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
