import React from 'react';
import { View } from 'react-native';
import { HomePage } from './HomePage';
import { Navbar } from './Navbar';

export const ScreenContent: React.FC = () => {
  return (
    <View className="h-full w-full flex-col bg-gray-800 align-middle">
      <HomePage />
      <Navbar />
    </View>
  );
};
