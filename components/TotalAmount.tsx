import { View, Text } from "react-native";
import React from "react";

interface TotalAmountProps {
  amount: number;
  title: string;
}

const TotalAmount = ({ amount, title }: TotalAmountProps) => {
  return (
    <View className="justify-between flex-row bg-primary50 p-2 rounded-lg items-center mb-3">
      <Text className="text-primary400">{title}</Text>
      <Text className="font-bold text-2xl text-primary500">
        ${amount.toFixed(2)}
      </Text>
    </View>
  );
};

export default TotalAmount;
