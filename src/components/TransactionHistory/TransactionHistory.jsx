import TransactionItem from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return <TransactionItem key={item.id} {...item} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
