import React from "react";

// Math.random results in either 0 or 1, 50% of the time 
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income" : "Expense"}{" "}
      for {isIncome ? "GH100" : "GH50"}{" "}
      in category Salary for {isIncome ? "Monday" : "Tuesday"}
    </div>
  );
};

export default InfoCard;
