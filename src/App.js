import "./App.css";
import Navbar from "./components/main/Navbar";
import Main from "./components/main/Main";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { check } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //set global font theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Sniglet", "cursive"].join(","),
    },
  });

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
    <ThemeProvider theme={theme}>
      <Navbar dispatch={dispatch} blockchain={blockchain} getData={getData} />
      <Main
        dispatch={dispatch}
        blockchain={blockchain}
        getData={getData}
        config={config}
        data={data}
      />
    </ThemeProvider>
  );
}

export default App;
