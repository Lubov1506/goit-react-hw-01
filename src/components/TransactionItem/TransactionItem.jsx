const TransactionItem = ({ type, amount, currency }) => {
  const properType = `${type[0].toUpperCase()}${type.slice(1)}`;
  return (
    <tr>
      <td>{properType}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
