import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import ConnectWallet from "./ConnectWallet";
import MintNFT from "./MintNFT";

function Main() {
  // initiate blockchain data shared among components
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const checkConnection = () => {
    if (blockchain.account === null || blockchain.smartContract === null) {
      dispatch(check());
    }
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("./config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    checkConnection();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  console.log(blockchain);

  return (
    <div>
      <ConnectWallet
        dispatch={dispatch}
        blockchain={blockchain}
        getData={getData}
      />
      <MintNFT
        dispatch={dispatch}
        CONFIG={CONFIG}
        blockchain={blockchain}
        getData={getData}
      />
    </div>
  );
}

export default Main;
