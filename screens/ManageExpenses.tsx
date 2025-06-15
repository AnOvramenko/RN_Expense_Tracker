import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ManageExpensesScreenProps } from "../navigation/types";
import ActionButton from "../components/ui/ActionButton";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../GlobalStyles";
import { useExpensesStore } from "../stores/expensesStore";

const ManageExpenses = ({ navigation, route }: ManageExpensesScreenProps) => {
  const removeExpense = useExpensesStore((state) => state.removeExpense);
  const addExpense = useExpensesStore((state) => state.addExpense);
  const updateExpense = useExpensesStore((state) => state.updateExpense);
  const isEditing = !!route.params;
  const handleCancelButton = () => {
    navigation.goBack();
  };

  const handleRemoveExpense = () => {
    if (isEditing) {
      removeExpense(route.params.id);
    }
    navigation.goBack();
  };

  const handleConfirmExpense = () => {
    navigation.goBack();
    if (isEditing) {
      updateExpense({
        id: "e1",
        title: "Groceries Big Shop",
        date: new Date("2022-03-12"),
        amount: 999.99,
      });
    } else {
      addExpense({
        amount: 32.25,
        date: new Date(),
        title: "React Native Course",
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, route.params]);

  // if (route.params) {
  //   return (
  //     <View className="p-4">
  //       <View className="mx-20 flex-row gap-1">
  //         <ActionButton type="cancel" onPress={handleCancelButton}>
  //           Cancel
  //         </ActionButton>
  //         <ActionButton type="ok" onPress={handleUpdateExpense}>
  //           Update
  //         </ActionButton>
  //       </View>
  //       <View className="h-[2px] bg-primary100 m-5" />
  //       <View className="items-center">
  //         <IconButton
  //           ionIconName="trash"
  //           color={Colors.error500}
  //           size={40}
  //           onPress={handleRemoveExpense}
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <View className="p-4">
      <View className="mx-20 flex-row gap-1">
        <ActionButton type="cancel" onPress={handleCancelButton}>
          Cancel
        </ActionButton>
        <ActionButton type="ok" onPress={handleConfirmExpense}>
          {isEditing ? "Update" : "Add"}
        </ActionButton>
      </View>
      {isEditing && (
        <>
          <View className="h-[2px] bg-primary100 m-5" />
          <View className="items-center">
            <IconButton
              ionIconName="trash"
              color={Colors.error500}
              size={40}
              onPress={handleRemoveExpense}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ManageExpenses;
