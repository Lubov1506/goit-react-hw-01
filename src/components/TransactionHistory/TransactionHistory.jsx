import TransactionItem from "../TransactionItem/TransactionItem";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
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
