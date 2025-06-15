import React from "react";
import { useExpensesStore } from "../stores/expensesStore";
import ExpensesOutput from "../components/ExpensesOutput";

const AllExpenses = () => {
  const expenses = useExpensesStore((state) => state.expenses);
  return (
    <ExpensesOutput
      title="Total"
      expenses={expenses}
      fallbackMessage="No registered expenses found"
    />
  );
};

export default AllExpenses;
