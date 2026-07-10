import { useState } from 'react';
import { useSelector } from 'react-redux';
import StatisticsPeriod from './StatisticsPeriod';
import StatisticsChart from './StatisticsChart';
import StatisticsList from './StatisticsList';
import { selectStatsByPeriod, selectBalance } from '../Redux/transactionsSelectors';
import styles from '../../css_modules/Statistics.module.css';
import HomeIcon from "../../images/homeIcon1.svg";
import StatisticsIcon from "../../images/statisticsIcon2.svg";
import DollarIcon from "../../images/dollarIcon.svg";
import Currency from "../Currency/Currency";

const DEFAULT_MONTH = 'March';
const DEFAULT_YEAR = 2022;

const Statistics = () => {
  const [month, setMonth] = useState(DEFAULT_MONTH);
  const [year, setYear] = useState(DEFAULT_YEAR);
  const [mobilePage, setMobilePage] = useState("statistics");

  const balance = useSelector(selectBalance);
  const { totalExpenses, totalIncome, categoryStats } =
    useSelector(state => selectStatsByPeriod(state, month, year));

  const isCurrencyView = mobilePage === "currency";

  return (
    <section className={styles.section}>
      <div className={styles.mobileNavigation}>
        <button className={styles.mobileButton} onClick={() => {}}>
          <img src={HomeIcon} alt="home" />
        </button>

        <button
          className={`${styles.mobileButton} ${mobilePage === "statistics" ? styles.mobileButtonActive : ""}`}
          onClick={() => setMobilePage("statistics")}
        >
          <img src={StatisticsIcon} alt="statistics" />
        </button>

        <button
          className={`${styles.mobileButton} ${isCurrencyView ? styles.mobileButtonActive : ""}`}
          onClick={() => setMobilePage("currency")}
        >
          <img src={DollarIcon} alt="currency" />
        </button>
      </div>

      {/* заголовок скрыт для currency-вида */}
      {!isCurrencyView && <h2 className={styles.title}>Statistics</h2>}

      {mobilePage === "statistics" ? (
        <div className={styles.content}>
          <StatisticsChart categoryStats={categoryStats} balance={balance} />
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
      ) : (
        <div className={styles.currencyView}>
          <Currency />
        </div>
      )}
    </section>
  );
};

export default Statistics;