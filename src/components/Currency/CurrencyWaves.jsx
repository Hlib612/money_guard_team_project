import styles from "./CurrencyWaves.module.css";

const CurrencyWaves = () => {
    return (
        <svg
            className={styles.waves}
            viewBox="0 0 400 220"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="currencyWaveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
            </defs>

            <path
                className={styles.waveFill}
                d="M0,140 C40,90 70,90 100,140 C130,190 170,190 200,120 C230,60 270,60 300,110 C330,150 360,150 400,90 L400,220 L0,220 Z"
                fill="url(#currencyWaveFill)"
            />

            <path
                className={styles.waveLine}
                d="M0,140 C40,90 70,90 100,140 C130,190 170,190 200,120 C230,60 270,60 300,110 C330,150 360,150 400,90"
                fill="none"
            />

            <circle className={styles.point} cx="50" cy="103" r="5" />
            <circle className={styles.point} cx="300" cy="110" r="5" />
        </svg>
    );
};

export default CurrencyWaves;