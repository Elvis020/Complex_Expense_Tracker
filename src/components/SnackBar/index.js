import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./styles";

const SnackbarComponent = ({ open, setOpen }) => {
  const elvisUI = useStyles();

  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <div className={elvisUI.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SnackbarComponent;
