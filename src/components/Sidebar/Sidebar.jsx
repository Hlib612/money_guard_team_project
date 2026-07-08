import styles from './Sidebar.module.css'
import homeIcon from '../../images/homeIcon.svg'
import statsIcon from '../../images/statisticsIcon.svg'
import SidebarWaves from './SidebarWaves'
import Home from '../Home'
import Statistics from '../Statistics/Statistics'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link to="/home">Home</Link>
        <Link to="/statistics">Statistics</Link>
      </nav>

      <div className={styles.balanceBlock}>
        <span className={styles.balanceLabel}>YOUR BALANCE</span>
        <span className={styles.balanceAmount}>₴ 24 000.00</span>
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
  )
}


export default Sidebar

        // <a href="#" className={styles.navItem}>
        //   <img src={homeIcon} alt="home" className={styles.navIcon} />
        //   <span><Link to="/home">Home</Link></span>
        // </a>
        // <a href="#" className={`${styles.navItem} ${styles.navItemActive}`}>
        //   <img src={statsIcon} alt="statistics" className={styles.navIcon} />
        //   <span><Link to="/statistics">Statistics</Link></span>
        // </a>