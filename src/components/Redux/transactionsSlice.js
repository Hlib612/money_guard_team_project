import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 24000.00,
  transactions: [
    { id: '1', type: 'expense', categoryId: 'main_expenses', amount: 8700.00, comment: '', date: '2022-03-01', month: 'March', year: 2022 },
    { id: '2', type: 'expense', categoryId: 'products',      amount: 3800.74, comment: '', date: '2022-03-02', month: 'March', year: 2022 },
    { id: '3', type: 'expense', categoryId: 'car',           amount: 1500.00, comment: '', date: '2022-03-03', month: 'March', year: 2022 },
    { id: '4', type: 'expense', categoryId: 'self_care',     amount:  800.00, comment: '', date: '2022-03-04', month: 'March', year: 2022 },
    { id: '5', type: 'expense', categoryId: 'child_care',    amount: 2208.50, comment: '', date: '2022-03-05', month: 'March', year: 2022 },
    { id: '6', type: 'expense', categoryId: 'household_products', amount: 300.00, comment: '', date: '2022-03-06', month: 'March', year: 2022 },
    { id: '7', type: 'expense', categoryId: 'education',     amount: 3400.00, comment: '', date: '2022-03-07', month: 'March', year: 2022 },
    { id: '8', type: 'expense', categoryId: 'leisure',       amount: 1230.00, comment: '', date: '2022-03-08', month: 'March', year: 2022 },
    { id: '9', type: 'expense', categoryId: 'other_expenses',amount:  610.00, comment: '', date: '2022-03-09', month: 'March', year: 2022 },
    { id: '10', type: 'income', categoryId: null,             amount: 27350.00, comment: 'Salary', date: '2022-03-01', month: 'March', year: 2022 },
  ],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      const transaction = { id: Date.now().toString(), ...action.payload };
      state.transactions.push(transaction);
      if (transaction.type === 'expense') {
        state.balance -= transaction.amount;
      } else {
        state.balance += transaction.amount;
      }
    },
    removeTransaction(state, action) {
      const tx = state.transactions.find(t => t.id === action.payload);
      if (!tx) return;
      if (tx.type === 'expense') state.balance += tx.amount;
      else state.balance -= tx.amount;
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
    },
    setBalance(state, action) { state.balance = action.payload; },
    setTransactions(state, action) { state.transactions = action.payload; },
  },
});

export const { addTransaction, removeTransaction, setBalance, setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;