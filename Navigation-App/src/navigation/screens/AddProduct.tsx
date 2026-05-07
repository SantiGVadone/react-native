import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useStock } from '../../hooks/useStock'
import COLORS from '../../constants/colors'

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
  const { addProduct } = useStock()

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.whitePage}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <TextInput
              placeholder='Nombre'
              autoCorrect={false}
              showSoftInputOnFocus={true}
              style={styles.input}
              onChangeText={(text) => setProduct({ ...product, name: text })}
              value={product.name}
            />
            <TextInput
              placeholder='Descripción'
              autoCorrect={false}
              style={styles.input}
              onChangeText={(text) =>
                setProduct({ ...product, description: text })
              }
              value={product.description}
            />
            <TextInput
              placeholder='Cantidad'
              style={styles.input}
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
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <TouchableOpacity
              onPress={() => {
                addProduct(product)
              }}
              style={{
                backgroundColor: COLORS.blue,
                borderRadius: 24,
                margin: 12,
              }}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ef4444bf',
                borderRadius: 24,
                margin: 12,
              }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.transparent,
  },
  input: {
    height: 64,
    margin: 8,
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 30,
    maxWidth: '75%',
    overflow: 'scroll',
  },
  whitePage: {
    backgroundColor: 'white',
    height: '50%',
    width: '75%',
    marginTop: 144,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 24,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.oscuro,
    fontWeight: 'bold',
    fontSize: 24,
    padding: 16,
    textAlign: 'center',
  },
})
