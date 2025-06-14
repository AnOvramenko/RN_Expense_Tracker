import { create } from "zustand";
import { Expense } from "../types/expense";
import { DUMMY_EXPENSES } from "../data";

interface ExpensesStore {
  expenses: Expense[];
  removeExpense: (id: string) => void;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: DUMMY_EXPENSES,
  removeExpense: (id: string) => set((state => ({
    expenses: state.expenses.filter(expense => expense.id !== id),
  }))),
}));
