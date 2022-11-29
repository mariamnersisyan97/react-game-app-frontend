import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Login = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(true);
  };

  return (
    <div className="login">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </form>
      <Button variant="outlined" color="secondary" onClick={handleClick}>
        Click to Login
      </Button>
      {login && (
        <div>
          <h2> You are logged in!</h2>
        </div>
      )}
    </div>
  );
};
