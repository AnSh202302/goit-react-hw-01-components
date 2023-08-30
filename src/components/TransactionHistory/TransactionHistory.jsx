import { TransactionHistoryBody } from 'components/TransactionHistoryBody/TransactionHistoryBody';
export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <TransactionHistoryBody
            key={item.id}
            amount={item.amount}
            currency={item.currency}
            type={item.type}
          />
        );
      })}
    </table>
  );
};
