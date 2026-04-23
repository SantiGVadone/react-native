import { View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

interface Product {
  id: string
  nombre: string
  descripcion: string
  cantidad: number
}

export function AddProduct() {
  const [product, setProduct] = useState<Product>({
    id: '',
    nombre: '',
    descripcion: '',
    cantidad: 0,
  })
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <View className='flex-1 items-center'>
          <TextInput
            placeholder='Nombre'
            autoCorrect={false}
            showSoftInputOnFocus={true}
            className='h-16 m-4 border-b-2 text-center text-3xl w-3/4'
            onChangeText={() => setProduct}
            value={product.nombre}
          />
          <TextInput
            placeholder='Descripción'
            autoCorrect={false}
            showSoftInputOnFocus={true}
            className='h-16 m-4 border-b-2 text-center text-3xl w-3/4'
            onChangeText={() => setProduct}
            value={product.descripcion}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
