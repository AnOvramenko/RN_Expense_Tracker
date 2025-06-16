import React, { useEffect, useState } from "react";
import { getRecentExpenses } from "../utils/date";
import { useExpensesStore } from "../stores/expensesStore";
import ExpensesOutput from "../components/ExpensesOutput";
import { getExpenses } from "../utils/http";
import { Expense } from "../types/expense";

const RecentExpenses = () => {
  const fetchExpenses = useExpensesStore((state) => state.fetchExpenses);
  const expenses = useExpensesStore((state) => state.expenses);
  // const [fetchedExpenses, setFetchedExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const expensesFS = await getExpenses();
    //   setFetchedExpenses(expensesFS);
    // }

    // fetchData();
    fetchExpenses();
  }, []);

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
