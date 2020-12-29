import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: 20,
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: '2em',
    },
  },
}));
