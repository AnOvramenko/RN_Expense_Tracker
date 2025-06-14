import { View } from "react-native";
import React from "react";
import { RecentExpensesScreenProps } from "../navigation/types";
import TotalAmount from "../components/TotalAmount";
import { getRecentExpenses, today } from "../utils/date";
import ExpensesList from "../components/ExpensesList";
import { getSumExpenses } from "../utils/helpers";
import { useExpensesStore } from "../stores/expensesStore";

const RecentExpenses = ({ navigation }: RecentExpensesScreenProps) => {
  const expenses = useExpensesStore(state => state.expenses);

  const visibleExpenses = getRecentExpenses(expenses);
  const totalAmount = getSumExpenses(visibleExpenses);
  return (
    <View className="flex-1 p-6">
      <TotalAmount amount={totalAmount} title="Last 7 Days" />
      {/* <Text className="text-xl text-amber-500">{today.toString()}</Text>
      {visibleExpenses.map(expense => <Text key={expense.id} className="text-white">{new Date(expense.date).toLocaleDateString()}</Text>)}
        <View className="h-2"></View>
        {DUMMY_EXPENSES.map(expense => <Text key={expense.id} className="text-cyan-300">{new Date(expense.date).toLocaleDateString()}</Text>)}
      <FlatList
        data={visibleExpenses}
        keyExtractor={(item) => item.id}
        renderItem={(expense) => <ExpanseItem item={expense.item}/>}
      /> */}
      <ExpensesList data={visibleExpenses} />
    </View>
  );
};

export default RecentExpenses;
