import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Stock } from '../navigation/screens/Stock'
import { Profile } from '../navigation/screens/Profile'
import { ProductDetail } from './screens/ProductDetail'
import { AddProduct } from './screens/AddProduct'

const RootStack = createNativeStackNavigator({
  screens: {
    Stock: {
      screen: Stock,
      options: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      options: {
        title: 'Profile Screen',
        headerTitleAlign: 'center',
      },
    },
    ProductDetail: {
      screen: ProductDetail,
      options: {
        title: 'Detalle del Producto',
      },
    },
    AddProduct: {
      screen: AddProduct,
      options: {
        title: 'Agregar Producto',
        presentation: 'modal',
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
