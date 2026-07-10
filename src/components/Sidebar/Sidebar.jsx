import styles from './Sidebar.module.css'
import homeIcon from '../../images/homeIcon1.svg'
import statsIcon from '../../images/statisticsIcon2.svg'
import SidebarWaves from './SidebarWaves'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>
          <img src={homeIcon} alt="home" className={styles.navIcon} />
          <span>Home</span>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.navItemActive}`}>
          <img src={statsIcon} alt="statistics" className={styles.navIcon} />
          <span>Statistics</span>
        </a>
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