import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ManageExpensesScreenProps } from "../navigation/types";
import ActionButton from "../components/ui/ActionButton";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../GlobalStyles";
import { useExpensesStore } from "../stores/expensesStore";

const ManageExpenses = ({ navigation, route }: ManageExpensesScreenProps) => {
  const removeExpense = useExpensesStore(state => state.removeExpense);
  const handleCancelButton = () => {
    navigation.goBack();
  }

  const handleRemoveExpense = () => {
    if (route.params) {
      removeExpense(route.params.id);
    }
    navigation.goBack();
  }

  useEffect(() => {
    if (route.params) {
      navigation.setOptions({ title: "Edit Expense" });
    } else {
      navigation.setOptions({ title: "Add Expense" });
    }
  }, [navigation, route.params]);

  if (route.params) {
    return (
      <View className="p-4">
        <View className="mx-20 flex-row gap-1">
          <ActionButton type="cancel" onPress={handleCancelButton}>Cancel</ActionButton>
          <ActionButton type="ok">Update</ActionButton>
        </View>
        <View className="h-[2px] bg-secondary m-5" />
        <View className="items-center">
          <IconButton
            ionIconName="trash"
            color={Colors.red}
            size={40}
            onPress={handleRemoveExpense}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="p-4">
      <View className="mx-20 flex-row gap-1">
        <ActionButton type="cancel" onPress={handleCancelButton}>Cancel</ActionButton>
        <ActionButton type="ok">Add</ActionButton>
      </View>
    </View>
  );
};

export default ManageExpenses;
