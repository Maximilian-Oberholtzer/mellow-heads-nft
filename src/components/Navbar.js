import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Button } from "@material-ui/core";
import ConnectWallet from "./ConnectWallet";
import useStyles from "./Styles";

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.navTitle}>
            <Button className={classes.navTextButton} variant="text">
              MHNFT
            </Button>
          </Typography>
          <Button className={classes.navTextButton} variant="text">
            Collection
          </Button>
          <Button className={classes.navTextButton} variant="text">
            About
          </Button>
          <Button className={classes.navTextButton} variant="text">
            Team
          </Button>
          <ConnectWallet
            dispatch={props.dispatch}
            blockchain={props.blockchain}
            getData={props.getData}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
