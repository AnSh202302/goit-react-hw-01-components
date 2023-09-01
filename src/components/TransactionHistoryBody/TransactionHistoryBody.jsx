import { TransactionTD } from './TransactionHistoryBody.styled';
export const TransactionHistoryBody = ({ amount, currency, type }) => {
  return (
    <tbody>
      <tr>
        <TransactionTD>{type}</TransactionTD>
        <TransactionTD>{amount}</TransactionTD>
        <TransactionTD>{currency}</TransactionTD>
      </tr>
    </tbody>
  );
};
