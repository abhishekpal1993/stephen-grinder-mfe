import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    textAlign: "center",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>Welcome to dashboard!</div>
  );
};
