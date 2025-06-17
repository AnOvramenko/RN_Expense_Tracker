import axios from "axios";
import { Expense, NewExpense } from "../types/expense";

const BASE_URL =
  "https://expensetracker-f6662-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = async (expenseData: Omit<Expense, "id">) => {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);
  const id = response.data.name;

  return id;
};

export const getExpenses = async () => {
  const response = await axios.get<Expense[]>(`${BASE_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateServerExpense = (id: string, expenseData: NewExpense) => {
  return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
};

export const deleteExpense = async (id: string) => {
  return axios.delete(`${BASE_URL}/expenses/${id}.json`);
};
