import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import ConnectWallet from "./ConnectWallet";
import useStyles from "./Styles";

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.navTitle}>Mellow Heads NFT</Typography>
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
