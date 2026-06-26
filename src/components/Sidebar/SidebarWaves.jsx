import styles from './SidebarWaves.module.css';

const SidebarWaves = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.svg}
        viewBox="0 0 380 180"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <path
          d="
            M0 90
            C40 60 70 60 95 90
            C120 120 135 130 160 110
            C210 70 250 40 290 15
            C320 0 340 20 355 40
            C365 52 372 58 380 55
            L380 180
            L0 180
            Z
          "
          fill="url(#waveFill)"
        />

        <path
          d="
            M0 90
            C40 60 70 60 95 90
            C120 120 135 130 160 110
            C210 70 250 40 290 15
            C320 0 340 20 355 40
            C365 52 372 58 380 55
          "
          fill="none"
          stroke="#FF868D"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default SidebarWaves;