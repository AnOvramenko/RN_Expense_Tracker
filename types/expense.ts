export interface Expense {
  id: string;
  description: string;
  date: Date;
  amount: number;
}

export interface NewExpense extends Omit<Expense, "id"> {}
