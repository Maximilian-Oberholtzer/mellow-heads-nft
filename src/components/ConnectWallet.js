//import React, { useEffect, useState, useRef } from "react";
import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
//import { fetchData } from "../redux/data/dataActions";

function ConnectWallet(props) {
  const { blockchain } = props;

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
      <button onClick={onClickConnectWallet}>
        {!blockchain.account ||
        !blockchain.smartContract ||
        !blockchain.account ? (
          <div>Connect Wallet</div>
        ) : (
          <div>Connected</div>
        )}
      </button>
      Connected Account: {blockchain.account}
      {blockchain.errorMsg}
    </div>
  );
}

export default ConnectWallet;
