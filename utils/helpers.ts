import { Expense } from "../types/expense";

export const getSumExpenses = (arr: Expense[]): number => {

  return arr.reduce((acc, expense) => acc + expense.amount, 0);
}

