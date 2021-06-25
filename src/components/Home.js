import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Booking from "./Booking";
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const Home = ({ handleAlert, loggedIn, setLoggedIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {loggedIn ? <Booking handleAlert={handleAlert} /> : <Dashboard />}
    </div>
  );
};

export default Home;
