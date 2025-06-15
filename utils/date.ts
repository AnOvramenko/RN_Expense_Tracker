import { Expense } from "../types/expense";

export const getRecentExpenses = (expenses: Expense[], days = 7): Expense[] => {
  const today = new Date(2022, 2, 23);
  // const today = new Date();
  const daysAgo = new Date(today);
  daysAgo.setDate(today.getDate() - days);

  const recentExpenses = expenses.filter((expense) => {
    return expense.date >= daysAgo && expense.date <= today;
  });

  return recentExpenses;
};

export const convertDateToString = (date: Date) => {
  const dateString = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ].join("-");
  return dateString;
};
