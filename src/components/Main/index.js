import React from "react";
import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

const Main = () => {
  const trackerUI = useStyles();
  return (
    <Card className={trackerUI.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly🔈" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance GH500
        </Typography>
        <Typography
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
          variant="subtitle1"
        >
          {/* InfoCard Component */}
          Try saying: Add Income for GH100 in category Salary for Monday...
        </Typography>
        <Divider />
        {/* Form Component */}
      </CardContent>

      <CardContent className={trackerUI.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
