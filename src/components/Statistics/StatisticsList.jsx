import styles from '../../css_modules/Statistics.module.css';

const StatisticsList = ({ categoryStats, totalExpenses, totalIncome }) => {
  const isEmpty = !categoryStats || categoryStats.length === 0;

  return (
    <div className={styles.listWrapper}>
      <div className={styles.listHeader}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul className={styles.listBody}>
        {isEmpty ? (
          <li className={styles.listEmpty}>No transactions for this period</li>
        ) : (
          categoryStats.map(cat => (
            <li key={cat.id} className={styles.listRow}>
              <div className={styles.listRowLeft}>
                <span className={styles.colorDot} style={{ backgroundColor: cat.color }} />
                <span className={styles.categoryLabel}>{cat.label}</span>
              </div>
              <span className={styles.categoryAmount}>
                {cat.amount.toLocaleString('uk-UA', { minimumFractionDigits: 2 })}
              </span>
            </li>
          ))
        )}
      </ul>

      <div className={styles.listTotals}>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Expenses:</span>
          <span className={`${styles.totalValue} ${styles.expensesColor}`}>
            {totalExpenses.toLocaleString('uk-UA', { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Income:</span>
          <span className={`${styles.totalValue} ${styles.incomeColor}`}>
            {totalIncome.toLocaleString('uk-UA', { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsList;