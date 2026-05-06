module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel', // Algunos sugieren quitar este si usas el de arriba, pero v4 suele pedirlo.
    ],
    plugins: [
      'react-native-reanimated/plugin', // SIEMPRE ÚLTIMO
    ],
  }
}
