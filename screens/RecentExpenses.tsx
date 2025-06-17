import React, { useEffect, useState } from "react";
import { getRecentExpenses } from "../utils/date";
import { useExpensesStore } from "../stores/expensesStore";
import ExpensesOutput from "../components/ExpensesOutput";
import { getExpenses } from "../utils/http";
import { Expense } from "../types/expense";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const RecentExpenses = () => {
  const fetchExpenses = useExpensesStore((state) => state.fetchExpenses);
  const expenses = useExpensesStore((state) => state.expenses);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');
  // const [fetchedExpenses, setFetchedExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
    //   const expensesFS = await getExpenses();
    //   setFetchedExpenses(expensesFS);
    setIsFetching(true);
    try {
      await fetchExpenses();
      // setIsFetching(false);
    } catch (error) {
      setError('Could not fetch expenses!');
    }

    setIsFetching(false)
    }

    fetchData();
  }, []);
  const confirmErrorHandler = () => {
    setError('');
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={confirmErrorHandler}/>
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

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
