import { View, Text, TextInput } from "react-native";
import React, { useEffect } from "react";
import { ManageExpensesScreenProps } from "../navigation/types";
import ActionButton from "../components/ui/ActionButton";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../GlobalStyles";
import { useExpensesStore } from "../stores/expensesStore";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { Expense } from "../types/expense";
import { storeExpense } from "../utils/http";

const ManageExpenses = ({ navigation, route }: ManageExpensesScreenProps) => {
  const removeExpense = useExpensesStore((state) => state.removeExpense);
  const addExpense = useExpensesStore((state) => state.addExpense);
  const updateExpense = useExpensesStore((state) => state.updateExpense);
  const expenses = useExpensesStore((state) => state.expenses);
  const isEditing = !!route.params;

  const selectedExpense = expenses.find(
    (expense) => expense.id === route.params?.id
  );
  const handleCancelButton = () => {
    navigation.goBack();
  };

  const handleRemoveExpense = () => {
    if (isEditing) {
      removeExpense(route.params.id);
    }
    navigation.goBack();
  };

  const handleConfirmExpense = (expenseData: Expense) => {
    if (isEditing) {
      updateExpense(expenseData);
    } else {
      storeExpense({
        amount: expenseData.amount,
        date: expenseData.date,
        description: expenseData.description,
      });
      addExpense(expenseData);
    }
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, route.params]);

  return (
    <View className="p-4">
      <ExpenseForm
        onCancel={handleCancelButton}
        onSubmit={handleConfirmExpense}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        selectedExpenseData={selectedExpense}
      />

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
