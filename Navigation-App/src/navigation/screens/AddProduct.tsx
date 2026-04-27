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

export function AddProduct() {
  const navigation = useNavigation()
  const [product, setProduct] = useState<Product>({
    id: '',
    nombre: '',
    descripcion: '',
    cantidad: 0,
  })

  const handleSubmit = () => {
    if (!product.nombre || !product.descripcion || !product.cantidad) {
      alert('Necesitas completar todos los campos')
      navigation.goBack()
      return
    } else {
      console.log(
        'Tengo que darle un ID y agregar a la db esto: -------------------',
      )
      console.log(product)
    }
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
              onChangeText={(text) => setProduct({ ...product, nombre: text })}
              value={product.nombre}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) =>
                setProduct({ ...product, descripcion: text })
              }
              value={product.descripcion}
            />
            <TextInput
              placeholder='Cantidad'
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) => {
                const valor = text === '' ? 0 : parseInt(text)
                if (!isNaN(valor)) {
                  setProduct({ ...product, cantidad: valor })
                }
              }}
              value={
                product.cantidad === 0 && product.cantidad !== undefined
                  ? ''
                  : product.cantidad.toString()
              }
            />
          </View>
          <View className='flex-row justify-evenly'>
            <TouchableOpacity
              onPress={handleSubmit}
              className='bg-blue-400 rounded-3xl m-3'
            >
              <Text className='color-gray-800 font-bold text-2xl p-4 text-center'>
                Agregar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='bg-red-500 rounded-3xl m-3'
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
