export const TransactionHistoryBody = ({ amount, currency, type }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};
