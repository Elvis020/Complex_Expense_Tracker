import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form";
import List from "./List";
import { ExpenseTrackerContext } from "../../Context";
const Main = () => {
  const trackerUI = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={trackerUI.root}>
      <CardHeader title="Expense Tracker🤑" subheader="Powered by Speechly🔈" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance GH{balance}
        </Typography>
        <Typography
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
            fontSize: "14px",
            fontStyle: "italic",
            fontFamily: "cursive",
          }}
          variant="subtitle1"
        >
          {/* InfoCard Component */}
          Try saying: Add Income for GH100 in category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className={trackerUI.cardContent}>
        <Grid spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
