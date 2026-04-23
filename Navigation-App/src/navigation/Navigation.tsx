import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Stock } from '../navigation/screens/Stock'
import { ProductDetail } from './screens/ProductDetail'
import { AddProduct } from './screens/AddProduct'
import { EditProduct } from './screens/EditProduct'

const RootStack = createNativeStackNavigator({
  screens: {
    Stock: {
      screen: Stock,
      options: {
        headerShown: false,
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
        presentation: 'transparentModal',
        headerShown: false,
        //aca se le puede poner transparentModal TENGO QUE PROBARLO con un headerShown: false
        // a la modal screen le damos un bg-transparent y le ponemos un 0.5 de densidad capaz para que quede facha el fondo, osea la pantalla que va a estar abajo
        // y dentro de esa pantalla modal, tiene que haber una View, en la cual va a estar todo el Form, con un bg-white y algun padding y margin, ademas obviamente tiene que estar centrado
      },
    },
    EditProduct: {
      screen: EditProduct,
      options: {
        presentation: 'transparentModal',
        headerShown: false,
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
