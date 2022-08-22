import styles from "./App.module.css";
import { useEffect } from "react";

export const Header = ({ currencyList }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1>Currency converter</h1>
        <div className={styles.headerBlock}>
          <div>
            USD: <strong>{currencyList[0].rate}</strong> UAH
          </div>
          <div>
            EUR: <strong>{currencyList[1].rate}</strong> UAH
          </div>
        </div>
      </div>
    </header>
  );
};
