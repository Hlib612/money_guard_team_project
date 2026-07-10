
import styles from './Sidebar.module.css'
import homeIcon from '../../images/homeIcon1.svg'
import statsIcon from '../../images/statisticsIcon2.svg'
import SidebarWaves from './SidebarWaves'
import homeIconHover from "../../images/homeIconHover.svg";
import Home from "../Home";
import Statistics from "../Statistics/Statistics";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ balance }) => {
  const [iconSrc, setIconSrc] = useState(`${homeIcon}`);

  const handleHover = () => {
    setIconSrc(`${homeIconHover}`);
  };

  const handleLeave = () => {
    setIconSrc(`${homeIcon}`);
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div
          className={`${styles.navDiv}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img src={iconSrc} alt="home" className={styles.navIcon} />
          <Link to="/home" className={`${styles.navItem}`}>
            Home
          </Link>
        </div>
        <div className={`${styles.navDiv}`}>
          <img src={statsIcon} alt="statistics" className={styles.navIcon} />
          <Link to="/statistics" className={`${styles.navItem}`}>
            Statistics
          </Link>
        </div>
      </nav>

      <div className={styles.balanceBlock}>
        <span className={styles.balanceLabel}>YOUR BALANCE</span>
        <span className={styles.balanceAmount}>{balance}</span>
      </div>

      <div className={styles.formGraphic}>
        <div className={styles.tableHeader}>
          <span>Currency</span>
          <span>Purchase</span>
          <span>Sale</span>
        </div>
        <div className={styles.tableRow}>
          <span>USD</span>
          <span>27.55</span>
          <span>27.65</span>
        </div>
        <div className={styles.tableRow}>
          <span>EUR</span>
          <span>30.00</span>
          <span>30.10</span>
        </div>
        <SidebarWaves />
      </div>
    </aside>
  );
};

export default Sidebar;


