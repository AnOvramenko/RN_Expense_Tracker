import { View, Text } from "react-native";
import React from "react";
import { Expense } from "../types/expense";
import { getSumExpenses } from "../utils/helpers";
import TotalAmount from "./TotalAmount";
import ExpensesList from "./ExpensesList";

interface ExpensesOutputProps {
  title: string;
  expenses: Expense[];
  fallbackMessage: string;
}

const ExpensesOutput = ({title, expenses, fallbackMessage}: ExpensesOutputProps) => {
  const totalAmount = getSumExpenses(expenses);

  return (
    <View className="flex-1 px-6 py-4">
      <TotalAmount amount={totalAmount} title={title} />
      {!!expenses.length ? (
        <ExpensesList data={expenses} />
      ) : (
        <Text className="text-center text-xl text-white mt-6">
          {fallbackMessage}
        </Text>
      )}
    </View>
  );
};

export default ExpensesOutput;
