import { View, Text } from "react-native";
import React from "react";

interface TotalAmountProps {
  amount: number;
  title: string;
}

const TotalAmount = ({ amount, title }: TotalAmountProps) => {
  return (
    <View className="justify-between flex-row bg-secondary p-2 rounded-lg items-center mb-3">
      <Text className="text-primaryText">{title}</Text>
      <Text className="font-bold text-2xl text-primaryText">${Math.round(amount * 100) / 100}</Text>
    </View>
  );
};

export default TotalAmount;
