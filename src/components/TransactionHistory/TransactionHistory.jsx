import { TransactionHistoryBody } from 'components/TransactionHistoryBody/TransactionHistoryBody';
import {
  TrasactionStyled,
  TrasactionTableTitle,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TrasactionStyled>
      <thead>
        <tr>
          <TrasactionTableTitle>Type</TrasactionTableTitle>
          <TrasactionTableTitle>Amount</TrasactionTableTitle>
          <TrasactionTableTitle>Currency</TrasactionTableTitle>
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
    </TrasactionStyled>
  );
};
