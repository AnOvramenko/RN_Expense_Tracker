import axios from "axios";
import { Expense } from "../types/expense";

const BASE_URL =
  "https://expensetracker-f6662-default-rtdb.europe-west1.firebasedatabase.app";

export const storeExpense = async (expenseData: Omit<Expense, "id">) => {
  const response = await axios.post(`${BASE_URL}/expenses.json`, expenseData);

  //just check the data
  const newExpense = await axios.get(`${BASE_URL}/expenses/${response.data.name}.json`)
  console.log(newExpense.data);

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
