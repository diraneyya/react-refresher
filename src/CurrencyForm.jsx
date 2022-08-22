import styles from "./App.module.css";

export const CurrencyForm = (props) => {
  return (
    <form className={styles.form}>
      <select
        className={styles.formSelect}
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencyList.map((el) => (
          <option value={el.name}>{el.name}</option>
        ))}
      </select>
      <input
        type="text"
        className={styles.formInput}
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      ></input>
    </form>
  );
};
