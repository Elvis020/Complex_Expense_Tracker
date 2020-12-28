import React from "react";
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

const Form = () => {
  const trackerUI = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom align="center" variant="subtitle2">
          ...
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item sm={6}>
        <TextField
          id="date"
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
          label="Date"
          fullWidth
        />
      </Grid>
      <Button
        className={trackerUI.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
