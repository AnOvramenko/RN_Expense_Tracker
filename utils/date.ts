import { Expense } from "../types/expense";

export const getRecentExpenses = (expenses: Expense[], days = 7): Expense[] => {
  const today = new Date();
  const daysAgo = new Date(today);
  daysAgo.setDate(today.getDate() - days);

  const recentExpenses = expenses.filter((expense) => {
    return expense.date >= daysAgo && expense.date <= today;
  });

  return recentExpenses;
};

export const convertDateToString = (date: Date) => {
  const dateString = date.toISOString().slice(0,10);

  return dateString;
};
