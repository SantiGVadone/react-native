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
  name: string
  description: string
  quantity: number
  category: string
}

export function AddProduct() {
  const navigation = useNavigation()
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    quantity: 0,
    category: 'General',
  })

  const handleSubmit = async () => {
    if (!product.name || !product.description || !product.quantity) {
      alert('Necesitas completar todos los campos')

      navigation.goBack()
      return
    }
    try {
      const response = await fetch('http://192.168.1.39:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product.name,
          description: product.description,
          quantity: Number(product.quantity),
          category: product.category,
        }),
      })

      if (response.ok) {
        alert('Producto agregado con éxito')
        navigation.goBack()
      } else {
        const errorDetail = await response.json()
        console.log('Error al guardar en la base de datos', errorDetail)
      }
    } catch (error) {
      console.error(error)
      alert('No se pudo conectar con la notebook')
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
              onChangeText={(text) => setProduct({ ...product, name: text })}
              value={product.name}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) =>
                setProduct({ ...product, description: text })
              }
              value={product.description}
            />
            <TextInput
              placeholder='Cantidad'
              className='h-16 m-2 border-b-hairline text-center text-3xl max-w-3/4 overflow-x-scroll'
              onChangeText={(text) => {
                const valor = text === '' ? 0 : parseInt(text)
                if (!isNaN(valor)) {
                  setProduct({ ...product, quantity: valor })
                }
              }}
              value={
                product.quantity === 0 && product.quantity !== undefined
                  ? ''
                  : product.quantity.toString()
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
