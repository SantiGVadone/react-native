const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const path = require('path')

const config = getDefaultConfig(__dirname)

// Esto ayuda a Metro en Windows a no perderse con los archivos
config.cacheStores = []

module.exports = withNativeWind(config, {
  input: path.resolve(__dirname, './global.css'),
})
