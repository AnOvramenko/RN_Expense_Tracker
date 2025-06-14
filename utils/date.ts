import { Expense } from "../types/expense";

export const today = new Date(2022, 2, 23);

export const getRecentExpenses = (expenses: Expense[], days = 7): Expense[] => {
  const daysAgo = new Date(today);
  daysAgo.setDate(today.getDate() - days);

  const recentExpenses = expenses.filter((expense) => {

    return new Date(expense.date) >= daysAgo;
  });

  return recentExpenses;
};
