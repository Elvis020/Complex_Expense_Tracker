import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../../Context";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";

import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
  const trackerUI = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} className={trackerUI.list}>
      {transactions.map((transac) => {
        const { type, amount, date, id, category } = transac;
        return (
          <Slide direction="down" in mountOnEnter unMountOnExit key={id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    (type === "Income" && trackerUI.avatarIncome) ||
                    trackerUI.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={category}
                secondary={`GH${amount} - ${date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick="">
                  <Delete onClick={() => deleteTransaction(id)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        );
      })}
    </MUIList>
  );
};

export default List;
