import React, { useState, useEffect } from "react";
import { connect } from "../redux/blockchain/blockchainActions";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#7c4a24",
    color: "#d5dadd",
  },
}));

function ConnectWallet(props) {
  const { blockchain } = props;
  const classes = useStyles();
  const [accountDisplay, setAccountDisplay] = useState("Connect");

  useEffect(() => {
    console.log(blockchain.account);
    if (blockchain.account) {
      const display =
        blockchain.account.length > 4
          ? `${blockchain.account.substring(
              0,
              4
            )}...${blockchain.account.substring(
              blockchain.account.length - 4,
              blockchain.account.length
            )}`
          : blockchain.account;
      setAccountDisplay(display);
    }
  }, [blockchain]);

  function onClickConnectWallet(e) {
    e.preventDefault();
    if (
      !blockchain.account ||
      !blockchain.smartContract ||
      !blockchain.account
    ) {
      props.dispatch(connect());
      props.getData();
    }
  }

  return (
    <div>
      <Button className={classes.button} onClick={onClickConnectWallet}>
        {accountDisplay}
      </Button>
    </div>
  );
}

export default ConnectWallet;
