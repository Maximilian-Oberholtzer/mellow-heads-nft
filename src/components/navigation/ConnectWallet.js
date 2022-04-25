import React, { useState, useEffect } from "react";
import { connect } from "../../redux/blockchain/blockchainActions";
import { Button } from "@material-ui/core";
import Popup from "../utils/Popup";
import useStyles from "../main/Styles";

function ConnectWallet(props) {
  const { blockchain, getData } = props;
  const classes = useStyles();
  const [accountDisplay, setAccountDisplay] = useState("Connect");

  // Concatenate account address if connected to Metamask
  useEffect(() => {
    if (blockchain.account) {
      getData();
      const display =
        blockchain.account.length > 4
          ? `${blockchain.account.substring(
              0,
              4
            )}..${blockchain.account.substring(
              blockchain.account.length - 4,
              blockchain.account.length
            )}`
          : blockchain.account;
      setAccountDisplay(display);
    } else {
      setAccountDisplay("Connect");
    }
  }, [blockchain]);

  // Send request to connect to wallet
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
      <Button
        className={classes.button}
        onClick={onClickConnectWallet}
        size="large"
      >
        {accountDisplay}
      </Button>
      <Popup popupType={"Error"} popupMsg={blockchain.errorMsg} />
    </div>
  );
}

export default ConnectWallet;
