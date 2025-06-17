import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { ManageExpensesScreenProps } from "../navigation/types";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../GlobalStyles";
import { useExpensesStore } from "../stores/expensesStore";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { NewExpense } from "../types/expense";
import {
  deleteExpense,
  storeExpense,
  updateServerExpense,
} from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const ManageExpenses = ({ navigation, route }: ManageExpensesScreenProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

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

  const handleRemoveExpense = async () => {
    setIsSubmitting(true);
    if (isEditing) {
      try {
        await deleteExpense(route.params.id);
        removeExpense(route.params.id);
        navigation.goBack();
      } catch (error) {
        setError("Could not delete expense - please try again later");
        setIsSubmitting(false);
      }
    }
  };

  const handleConfirmExpense = async (expenseData: NewExpense) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        updateExpense({ id: route.params.id, ...expenseData });
        await updateServerExpense(route.params.id, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ id, ...expenseData });
      }

      navigation.goBack();
    } catch (e) {
      setError(
        `Could not ${isEditing ? "update" : "add"} expense - please try again later`
      );
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, route.params]);

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={() => setError("")} />;
  }

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
