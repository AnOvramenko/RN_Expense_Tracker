import { View } from "react-native";
import React from "react";
import TotalAmount from "../components/TotalAmount";
import ExpensesList from "../components/ExpensesList";
import { getSumExpenses } from "../utils/helpers";
import { useExpensesStore } from "../stores/expensesStore";

const AllExpenses = () => {
  const expenses = useExpensesStore(state => state.expenses);
  const totalAmount = getSumExpenses(expenses);
  return (
    <View className=" flex-1 px-6 py-4">
      <TotalAmount amount={totalAmount} title="Total" />
      <ExpensesList data={expenses}/>
    </View>
  );
};

export default AllExpenses;
