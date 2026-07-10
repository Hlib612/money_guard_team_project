import styles from "./Currency.module.css";
import CurrencyWaves from "./CurrencyWaves";

const Currency = () => {
    return (
        <div className={styles.currencyPage}>
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
                <div className={styles.wavesWrapper}>
                    <CurrencyWaves />
                </div>
            </div>
        </div>
    );
};

export default Currency;