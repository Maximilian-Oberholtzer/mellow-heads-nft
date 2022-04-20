import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import MintNFT from "./MintNFT";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import About from "./About";

function Main() {
  const classes = useStyles();
  // initiate blockchain data shared among components
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [config, setConfig] = useState({
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
    if (blockchain.account && blockchain.smartContract) {
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
    const configFile = await configResponse.json();
    setConfig(configFile[process.env.REACT_APP_NETWORK_CONFIG]);
  };

  // Set config and check if wallet is already connected
  useEffect(() => {
    getConfig();
    checkConnection();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className={classes.mainContainer}>
      <Navbar dispatch={dispatch} blockchain={blockchain} getData={getData} />
      <Welcome config={config} />
      <MintNFT
        dispatch={dispatch}
        config={config}
        blockchain={blockchain}
        getData={getData}
        data={data}
      />
      <About />
    </div>
  );
}

export default Main;
