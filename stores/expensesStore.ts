import { create } from "zustand";
import { Expense } from "../types/expense";
import { DUMMY_EXPENSES } from "../data";

interface ExpensesStore {
  expenses: Expense[];
  removeExpense: (id: string) => void;
  addExpense: ({ amount, date, title }: Omit<Expense, "id">) => void;
  updateExpense: (expense: Expense) => void;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: DUMMY_EXPENSES,
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
        expenses: [{ id: `e${newId}`, ...expenseData }, ...state.expenses],
      };
    }),
  updateExpense: (newExpense) =>
    set((state) => ({
      expenses: state.expenses.map((expense) =>
        newExpense.id === expense.id ? newExpense : expense
      ),
    })),
}));
