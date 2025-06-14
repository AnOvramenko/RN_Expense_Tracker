import { FlatList } from "react-native";
import React from "react";
import ExpanseItem from "./ExpanseItem";
import { Expense } from "../types/expense";

interface ExpensesListProps {
  data: Expense[];
}

const ExpensesList = ({data}: ExpensesListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(expense) => <ExpanseItem item={expense.item} />}
      
    />
  );
};

export default ExpensesList;
