import React from "react";
import Tablerow from "./Tablerow";

//this is the function displays the data from the db.json file into a table

function Table ({transactions, onDelete}) {
    return(
    <div className="transaction-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Tablerow key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </tbody>
    </table>  
   </div>     
    )
}
export default Table;