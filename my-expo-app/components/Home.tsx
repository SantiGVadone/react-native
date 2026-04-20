import { Text, View, Button } from 'react-native';
export default function Home({ navigation }: any) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-200">
      <Text className="w-1/2 text-center text-4xl font-bold  color-black">
        Esta es la Home Page
      </Text>
      <Button title="Ir al Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
