import React from 'react';
import Transaction from './Transaction.jsx';

// const TransactionsList = ({transactions}) => {
//     console.log(transactions);
//   return (
//     <ul className="transactions">
//       {transactions.map(transaction => (
//         <Transaction key={transaction.id} {...transaction} />
//       ))}
//     </ul>
//   );
// };

const TransactionsList = (props) => {
    // console.log(props.transactions);
  return (
    <ul className="transactions">
      {props.transactions.map(transaction => (
        <Transaction key={transaction.id} rate = {transaction.rate} from = {transaction.from} to= {transaction.to} amount={transaction.amount} time={transaction.time}/>
      ))}
    </ul>
  );
};

export default TransactionsList;
