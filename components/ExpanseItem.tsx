import { View, Text, Pressable } from "react-native";
import React from "react";
import { Expense } from "../types/expense";
import { useNavigation } from "@react-navigation/native";
import { AllNavigationProps } from "../navigation/types";
import { Colors, ShadowStyles } from "../GlobalStyles";
import { convertDateToString } from "../utils/date";

interface ExpanseItemProps {
  item: Expense;
}

const ExpanseItem = ({ item }: ExpanseItemProps) => {
  const navigation = useNavigation<AllNavigationProps>();

  const handleUpdate = () => {
    navigation.navigate("ManageExpenses", { id: item.id });
  };

  return (
    <View className="bg-primary400 my-2 rounded-lg" style={{ overflow: "hidden", ...ShadowStyles }}>
      <Pressable
        android_ripple={{ color: Colors.primary200 }}
        className="flex-row justify-between items-center p-3"
        onPress={handleUpdate}
      >
        <View>
          <Text className="text-white text-xl font-bold">{item.title}</Text>
          <Text className="text-white">{convertDateToString(item.date)}</Text>
        </View>
        <View className="bg-white w-20 h-12 items-center justify-center rounded-lg">
          <Text className="font-bold text-[16px] text-primary700">{item.amount.toFixed(2)}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpanseItem;
