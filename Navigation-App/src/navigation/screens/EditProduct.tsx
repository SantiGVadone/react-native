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
        <View className='bg-white h-2/5 w-3/4 mt-36 border-2 border-black shadow-black shadow-2xl rounded-3xl p-5 '>
          <View className='flex-1 items-center mb-4 pb-4'>
            <TextInput
              placeholder='Nombre'
              autoCorrect={false}
              showSoftInputOnFocus={true}
              className='h-16 m-4 border-b-2 text-center text-2xl w-3/4'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, nombre: text })
              }
              value={newProduct.nombre}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              className='h-16 m-4 border-b-2 text-center text-2xl w-3/4'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, descripcion: text })
              }
              value={newProduct.descripcion}
            />
            <TextInput
              placeholder='Cantidad'
              className='h-16 m-4 border-b-2 text-center text-2xl w-3/4'
              onChangeText={(text) =>
                setNewProduct({ ...newProduct, cantidad: parseInt(text) })
              }
              value={newProduct.cantidad.toString()}
            />
          </View>
          <View className='mt-4 flex-row justify-evenly'>
            <TouchableOpacity
              onPress={handleSubmit}
              className='bg-blue-400 rounded-3xl'
            >
              <Text className='color-gray-800 font-bold text-2xl p-4 text-center'>
                Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='bg-red-500 rounded-3xl'
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
