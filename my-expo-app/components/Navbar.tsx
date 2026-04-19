import { View, Text } from 'react-native';

export const Navbar = () => {
  return (
    <View className="top-10 flex h-20 w-full flex-row justify-between bg-gray-500">
      <Text className={iconos}>INICIO</Text>
      <Text className={iconos}>USER</Text>
      <Text className={iconos}>ALGO</Text>
      <Text className={iconos}>4TA PAG</Text>
    </View>
  );
};
const iconos = 'flex p-5 font-bold color-white';
