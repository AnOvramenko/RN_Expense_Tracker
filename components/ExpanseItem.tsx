import { View, Text, Pressable } from "react-native";
import React from "react";
import { Expense } from "../types/expense";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../navigation/types";

interface ExpanseItemProps {
  item: Expense;
}

const ExpanseItem = ({ item }: ExpanseItemProps) => {
  const navigation = useNavigation<AllNavigationProps>();

  const handleUpdate = () => {
    navigation.navigate("ManageExpenses", { id: item.id });
  };

  return (
    <View className="bg-primary my-2 rounded-lg" style={{ overflow: "hidden" }}>
      <Pressable
        android_ripple={{ color: "#638abd" }}
        className="flex-row justify-between items-center p-3"
        onPress={handleUpdate}
      >
        <View>
          <Text className="text-white text-xl font-bold">{item.title}</Text>
          <Text className="text-white">{item.date}</Text>
        </View>
        <View className="bg-white w-20 h-12 items-center justify-center rounded-lg">
          <Text className="font-bold text-[16px]">{item.amount}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpanseItem;
