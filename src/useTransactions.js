import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./data/Categories";

// Custom hooks = arrow function with 'use' as a prefix
const useTransaction = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const selectedCategory = transactions.filter((t) => t.type === title);
  const total = selectedCategory.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories =
    (title === "Income" && incomeCategories) || expenseCategories;
  console.log({ selectedCategory, total, categories });

  selectedCategory.forEach((t) => {
    const nCategory = categories.find((c) => c.type === t.category);
    if (nCategory) nCategory.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransaction;
