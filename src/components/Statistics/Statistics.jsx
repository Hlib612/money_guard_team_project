import { useState } from 'react';
import { useSelector } from 'react-redux';
import StatisticsPeriod from './StatisticsPeriod';
import StatisticsChart from './StatisticsChart';
import StatisticsList from './StatisticsList';
import { selectStatsByPeriod, selectBalance } from '../Redux/transactionsSelectors';
import styles from '../../css_modules/Statistics.module.css';

const DEFAULT_MONTH = 'March';
const DEFAULT_YEAR = 2022;

const Statistics = () => {
  const [month, setMonth] = useState(DEFAULT_MONTH);
  const [year, setYear] = useState(DEFAULT_YEAR);

  const balance = useSelector(selectBalance);
  const { totalExpenses, totalIncome, categoryStats } =
    useSelector(state => selectStatsByPeriod(state, 'March', 2022));
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Statistics</h2>

      <div className={styles.content}>
        <StatisticsChart
          categoryStats={categoryStats}
          balance={balance}
        />

        <div className={styles.rightPanel}>
          <StatisticsPeriod
            month={month}
            year={year}
            onMonthChange={setMonth}
            onYearChange={setYear}
          />
          <StatisticsList
            categoryStats={categoryStats}
            totalExpenses={totalExpenses}
            totalIncome={totalIncome}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
