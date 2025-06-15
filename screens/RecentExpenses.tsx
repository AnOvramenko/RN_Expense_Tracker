import React from "react";
import { getRecentExpenses } from "../utils/date";
import { useExpensesStore } from "../stores/expensesStore";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpenses = () => {
  const expenses = useExpensesStore((state) => state.expenses);

  const visibleExpenses = getRecentExpenses(expenses);
  return (
    <ExpensesOutput
      expenses={visibleExpenses}
      title="Last 7 Days"
      fallbackMessage="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
