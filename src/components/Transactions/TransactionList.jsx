import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const TransactionList = (props) => {
  let { transactions, transactionType } = props;
  let transactionArray;
  switch (transactionType) {
    case "all":
      transactionArray = transactions;
      break;
    case "revenue":
      transactionArray = transactions.filter((transaction) => {
        return transaction.type == "revenue";
      });
      break;
    case "expense":
      transactionArray = transactions.filter((transaction) => {
        return transaction.type == "expense";
      });
      break;
    default:
      break;
  }

  let transactionElements = transactionArray.map((transaction) => {
    let icon;
    switch (transaction.category) {
      case "Food":
        icon = <FastfoodRoundedIcon className="transaction-icon" />;
        break;
      case "Housing":
        icon = <MapsHomeWorkOutlinedIcon className="transaction-icon" />;
        break;
      case "Transportation":
        icon = <DirectionsBusFilledOutlinedIcon className="transaction-icon" />;
        break;
      case "Entertainment":
        icon = <NightlifeOutlinedIcon className="transaction-icon" />;
        break;
      case "Utilities":
        icon = <ProductionQuantityLimitsIcon className="transaction-icon" />;
        break;
      case "other":
        icon = <MoreHorizOutlinedIcon className="transaction-icon" />;
        break;
      case "Card replenishment":
        icon = <AddCardIcon className="transaction-icon" />;
        break;
      case "Amount credited to account":
        icon = <PaymentsIcon className="transaction-icon" />;
        break;
      case "Interest Received":
        icon = <AccountBalanceIcon className="transaction-icon" />;
        break;

      default:
        break;
    }
    return (
      <div className="transaction-overview" key={transaction.id}>
        {icon}
        <div className="transaction">
          <p className="transaction-name">{transaction.title}</p>
          <p className="transaction-category">{transaction.category}</p>
        </div>
        <div>
          <p className={transaction.type}>{transaction.amount}</p>
        </div>
      </div>
    );
  });
  return transactionElements;
};

export default TransactionList;
