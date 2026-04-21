import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Stock } from '../navigation/screens/Stock'
import { Profile } from '../navigation/screens/Profile'
import { StockOptions } from './screens/StockOptions'
import { ProductDetail } from './screens/ProductDetail'

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
    StockOptions: {
      screen: StockOptions,
      options: {
        title: 'Opciones Screen',
        headerTitleAlign: 'center',
      },
    },
    ProductDetail: {
      screen: ProductDetail,
      options: {
        headerShown: false,
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
