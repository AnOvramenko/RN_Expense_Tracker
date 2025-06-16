export interface Expense {
  id: string;
  description: string;
  date: Date;
  amount: number;
}

export interface newExpense extends Omit<Expense, 'id'>{};