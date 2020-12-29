import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../Context";
import { v4 as uuidv4 } from "uuid";
import { incomeCategories, expenseCategories } from "../../../data/Categories";
import formatDate from "../../../Utils/formatDate";

// From Speecly
import { useSpeechContext } from "@speechly/react-client";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const trackerUI = useStyles();
  const { segment } = useSpeechContext();
  const selectedCategory =
    (formData.type === "Income" && incomeCategories) || expenseCategories;

  const { addTransaction } = useContext(ExpenseTrackerContext);
  const createTransaction = () => {
    if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
        switch (e.type) {
          case "amount":
            setFormData({ ...formData, amount: e.value });
            break;
          case "category":
            if(incomeCategories.map(iC => iC.type.includes(category))){
              setFormData({ ...formData, type:'Income', category: category });
            }
            else if(expenseCategories.map(iC => iC.type.includes(category))){
              setFormData({ ...formData, type:'Expense', category: category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: e.value });
            break;
          default:
            break;
        }
      });
      if(segment.isFinal && formData.amount && formData.category && formData.type){
        createTransaction();
      }
    }
  }, [segment]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom align="center" variant="subtitle2">
          {segment && segment.words.map((w) => w.value).join(" ")}
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategory.map((category, index) => (
              <MenuItem key={index} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={6}>
        <TextField
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          type="number"
          label="Amount"
          fullWidth
        />
      </Grid>
      <Grid item sm={6}>
        <TextField
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          id="date"
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          label="Date"
        />
      </Grid>
      <Button
        className={trackerUI.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => createTransaction()}
        disabled={!formData.amount || !formData.category}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
