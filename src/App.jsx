import styles from "./App.module.css";
import { Main } from "./Main";
import { Header } from "./Header";
import { useState, useEffect } from "react";

export const App = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const getCurrencyData = async () => {
    const response = await fetch(
      "https://api.exchangerate.host/latest?base=UAH"
    );
    const currencyData = await response.json();

    setCurrencyList([
      {
        name: "USD",
        rate: (1 / currencyData.rates.USD).toFixed(2),
      },
      {
        name: "EUR",
        rate: (1 / currencyData.rates.EUR).toFixed(2),
      },
      {
        name: "UAH",
        rate: 1,
      },
    ]);
  };
  useEffect(() => {
    getCurrencyData();
  }, []);

  return (
    <div className={styles.container}>
      {currencyList.length > 0 && (
        <div>
          <Header
            currencyList={currencyList}
            getCurrencyData={getCurrencyData}
          />
          <Main currencyList={currencyList} />
        </div>
      )}
    </div>
  );
};
