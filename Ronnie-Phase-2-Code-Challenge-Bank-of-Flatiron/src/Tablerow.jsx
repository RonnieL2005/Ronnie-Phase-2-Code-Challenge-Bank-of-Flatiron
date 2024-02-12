import React from "react";

//this function is used for showing the info about the transactions in a table row format

function Tablerow ({ transaction, onDelete }) {
    return (
    <>
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
        <td>
          <button onClick={() => onDelete(transaction.id)}>Delete</button>
        </td>
      </tr>
    </>
    );
  };

  
  export default Tablerow;