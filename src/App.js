import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details";
import Main from "./components/Main";
import useStyles from "./styles";

const App = () => {
  const trackerUI = useStyles();
  return (
    <Grid
      container
      spacing={1}
      className={trackerUI.grid}
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={3}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

export default App;
