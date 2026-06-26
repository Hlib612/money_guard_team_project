import categories from '../Statistics/categories.json';

export const selectBalance = state => state.transactions.balance;

export const selectAllTransactions = state => state.transactions.transactions;

// ─── СТАТИСТИКА ПО ФИЛЬТРУ (месяц + год) ────────────────────────────────────
//
// Возвращает объект:
// {
//   totalExpenses: 22549.24,
//   totalIncome: 27350.00,
//   categoryStats: [
//     { id: 'car', label: 'Car', color: '#FD9498', amount: 1500 },
//     ...
//   ]
// }
export const selectStatsByPeriod = (state, month, year) => {
  const transactions = state.transactions.transactions;

  const filtered = transactions.filter(
    tx => tx.month === month && tx.year === year
  );

  const totalExpenses = filtered
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalIncome = filtered
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const categoryStats = categories.map(cat => {
    const amount = filtered
      .filter(tx => tx.type === 'expense' && tx.categoryId === cat.id)
      .reduce((sum, tx) => sum + tx.amount, 0);

    return {
      id: cat.id,
      label: cat.label,
      color: cat.color,
      amount,
    };

  }).filter(cat => cat.amount > 0);

  return { totalExpenses, totalIncome, categoryStats };
};
