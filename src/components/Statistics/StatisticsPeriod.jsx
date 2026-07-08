import { useState, useRef, useEffect } from 'react';
import styles from "../../css_modules/Statistics.module.css";

const MONTHS = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December',
];

const YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

const Dropdown = ({ value, options, onChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownWrapper} ref={ref}>
      <label className={styles.dropdownLabel}>{label}</label>
      <button
        className={styles.dropdownTrigger}
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        <span>{value}</span>
        <span className={`${styles.arrow} ${open ? styles.arrowUp : ''}`}>▼</span>
      </button>

      {open && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li
              key={option}
              className={`${styles.dropdownItem} ${option === value ? styles.dropdownItemActive : ''}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const StatisticsPeriod = ({ month, year, onMonthChange, onYearChange }) => {
  return (
    <div className={styles.periodRow}>
      <Dropdown
        label="Month"
        value={month}
        options={MONTHS}
        onChange={onMonthChange}
      />
      <Dropdown
        label="Year"
        value={year}
        options={YEARS}
        onChange={val => onYearChange(Number(val))}
      />
    </div>
  );
};

export default StatisticsPeriod;
