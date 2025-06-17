import { create } from "zustand";
import { Expense } from "../types/expense";
import { getExpenses } from "../utils/http";

interface ExpensesStore {
  expenses: Expense[];
  removeExpense: (id: string) => void;
  addExpense: (expense: Expense) => void;
  updateExpense: (expense: Expense) => void;
  fetchExpenses: () => Promise<void>;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: [],
  removeExpense: (id: string) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
  addExpense: (expenseData) =>
    set((state) => {
      return {
        expenses: [expenseData, ...state.expenses],
      };
    }),
  updateExpense: (newExpense) =>
    set((state) => ({
      expenses: state.expenses.map((expense) =>
        newExpense.id === expense.id ? newExpense : expense
      ),
    })),
  fetchExpenses: async () => {
    const res = await getExpenses();
    set({ expenses: res.reverse() });
  },
}));
