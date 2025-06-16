import { create } from "zustand";
import { Expense } from "../types/expense";
import { DUMMY_EXPENSES } from "../data";
import { getExpenses } from "../utils/http";

interface ExpensesStore {
  expenses: Expense[];
  removeExpense: (id: string) => void;
  addExpense: ({ amount, date, description }: Expense) => void;
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
      const newId =
        Math.max(
          0,
          ...state.expenses.map((expense) => {
            const currId = Number(expense.id.slice(1));
            return currId;
          })
        ) + 1;
      return {
        expenses: [{ ...expenseData, id: `e${newId}` }, ...state.expenses],
      };
    }),
  updateExpense: (newExpense) =>
    set((state) => ({
      expenses: state.expenses.map((expense) =>
        newExpense.id === expense.id ? newExpense : expense
      ),
    })),
  fetchExpenses: async () => {
    try {
      const res = await getExpenses();
      set({ expenses: res });
    } catch (e) {
      console.error("Failed to fetch", e);
    }
  },
}));
