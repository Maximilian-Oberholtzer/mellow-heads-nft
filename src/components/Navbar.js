import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConnectWallet from "./ConnectWallet";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#a07945",
  },
  flexbox: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.title}>Mellow Heads NFT</Typography>
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
