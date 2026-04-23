import { View, TextInput, TouchableOpacity, Text } from 'react-native'
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
      setProduct({ ...product, id: 'primer_usuario' })
      console.log(product)
    }
  }
  return (
    <View className='flex-1 items-center justify-start bg-transparent/50'>
      <View className='bg-white h-2/5 w-3/4 mt-36 border-2 border-black shadow-black shadow-2xl rounded-3xl p-5 '>
        <View className='flex-1 items-center mb-4 pb-4'>
          <TextInput
            placeholder='Nombre'
            autoCorrect={false}
            showSoftInputOnFocus={true}
            className='h-16 m-4 border-b-2 text-center text-3xl w-3/4'
            onChangeText={(text) => setProduct({ ...product, nombre: text })}
            value={product.nombre}
          />
          <TextInput
            placeholder='Descripción'
            autoCorrect={false}
            className='h-16 m-4 border-b-2 text-center text-3xl w-3/4'
            onChangeText={(text) =>
              setProduct({ ...product, descripcion: text })
            }
            value={product.descripcion}
          />
          <TextInput
            placeholder='Cantidad'
            className='h-16 m-4 border-b-2 text-center text-3xl w-3/4'
            onChangeText={(text) =>
              setProduct({ ...product, cantidad: parseInt(text) })
            }
            value={product.cantidad.toString()}
          />
        </View>
        <View className='mt-4 flex-row justify-evenly'>
          <TouchableOpacity
            onPress={handleSubmit}
            className='bg-blue-400 rounded-3xl'
          >
            <Text className='color-gray-800 font-bold text-2xl p-4 text-center'>
              Agregar
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
  )
}
