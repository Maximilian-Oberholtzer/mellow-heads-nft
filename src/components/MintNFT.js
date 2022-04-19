import React, { useState } from "react";
import { fetchData } from "../redux/data/dataActions";
import { Button, Container, IconButton, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "16px",
    padding: "20px",
    color: "#7c4a24",
  },
  button: {
    backgroundColor: "#7c4a24",
    color: "#d5dadd",
  },
  center: {
    textAlign: "center",
  },
  progressCircle: {
    width: "17px !important",
    height: "17px !important",
  },
}));

function MintNFT(props) {
  const classes = useStyles();
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click mint to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const { blockchain } = props;

  function onClickClaimNFT(e) {
    e.preventDefault();
    if (blockchain.account && blockchain.smartContract && blockchain.account) {
      //proceed with minting
      claimNFTs();
      props.getData();
    } else {
      //Show error popup
      setErrorMsg("Please connect your wallet before minting!");
      setErrorCount(errorCount + 1);
    }
  }

  //Send data to Smart Contract with Metamask
  const claimNFTs = () => {
    const cost = props.config.WEI_COST;
    const gasLimit = props.config.GAS_LIMIT;
    const totalCostWei = (cost * mintAmount).toString();
    const totalGasLimit = (gasLimit * mintAmount).toString();
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${props.config.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: props.config.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${props.config.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        props.dispatch(fetchData(blockchain.account));
      });
  };

  const decreaseMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const increaseMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 100) {
      newMintAmount = 100;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <div>
      <Container
        style={{ backgroundColor: "#d5dadd" }}
        className={classes.container}
        maxWidth="sm"
      >
        <Typography variant="h4" className={classes.center}>
          Mint your own for {props.config.DISPLAY_COST} Matic
        </Typography>
        <div className={classes.center}>
          <IconButton onClick={decreaseMintAmount} disabled={claimingNft}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <b>{mintAmount}</b>
          <IconButton onClick={increaseMintAmount} disabled={claimingNft}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.center}>
          <Button
            className={classes.button}
            onClick={onClickClaimNFT}
            disabled={claimingNft}
          >
            {!claimingNft ? (
              <div>Mint</div>
            ) : (
              <div>
                <CircularProgress className={classes.progressCircle} />
              </div>
            )}
          </Button>
        </div>
        <Popup errorMsg={errorMsg} errorCount={errorCount} />
      </Container>
    </div>
  );
}

export default MintNFT;
