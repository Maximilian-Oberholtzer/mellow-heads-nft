import React, { useEffect, useState } from "react";
import { fetchData } from "../../redux/data/dataActions";
import {
  Button,
  Container,
  IconButton,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";
import Popup from "../utils/Popup";
import useStyles from "./Styles";
import NFTgif from "./NFTgif";

function MintNFT(props) {
  const classes = useStyles();
  const [mintingCompleted, setMintingCompleted] = useState(false);
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [popupType, setPopupType] = useState("");
  const [popupMsg, setPopupMsg] = useState("");
  const [popupCount, setPopupCount] = useState(0);
  const { blockchain, data, config } = props;

  useEffect(() => {
    if (data.totalSupply >= config.MAX_SUPPLY) {
      setMintingCompleted(true);
    }
    if (!blockchain.account) {
      setMintAmount(1);
    }
  }, [blockchain, data]);

  function onClickClaimNFT(e) {
    e.preventDefault();
    if (
      blockchain.account &&
      blockchain.smartContract &&
      blockchain.account &&
      mintAmount + parseInt(data.totalSupply) <= config.MAX_SUPPLY
    ) {
      //proceed with minting
      claimNFTs();
      props.getData();
    } else {
      //Show error popup
      setPopupType("Error");
      setPopupMsg("Please connect your wallet before minting!");
      setPopupCount(popupCount + 1);
    }
  }

  //Send data to Smart Contract with Metamask
  const claimNFTs = () => {
    const cost = config.WEI_COST;
    const gasLimit = config.GAS_LIMIT;
    const totalCostWei = (cost * mintAmount).toString();
    const totalGasLimit = (gasLimit * mintAmount).toString();
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: config.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        //setFeedback("Sorry, something went wrong please try again later.");
        setPopupType("Error");
        setPopupMsg("Something went wrong. Please try again later.");
        setPopupCount(popupCount + 1);
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setPopupType("Success!");
        setPopupMsg(
          "Your Mellow Head(s) are minted! Go to the collection page or OpenSea to view them."
        );
        setPopupCount(popupCount + 1);
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
    if (blockchain.account) {
      let newMintAmount = mintAmount + 1;
      if (newMintAmount > 20) {
        newMintAmount = 20;
      } else if (mintAmount + parseInt(data.totalSupply) >= config.MAX_SUPPLY) {
        newMintAmount = mintAmount;
      }
      setMintAmount(newMintAmount);
    }
  };

  //Used when minting is still active
  const mintDisplay = (
    <>
      <Typography variant="h3" className={classes.mintTitle}>
        Mint
      </Typography>
      <Container className={classes.mintContainer} maxWidth="sm">
        <Typography variant="h5" className={classes.mintText}>
          Each Mellow Head costs {props.config.DISPLAY_COST} Matic
        </Typography>
        <Typography variant="h5" className={classes.mintText}>
          {props.data.totalSupply} / {props.config.MAX_SUPPLY} minted
        </Typography>
        <div className={classes.mintText}>
          <IconButton
            className={classes.iconButton}
            onClick={decreaseMintAmount}
            disabled={claimingNft}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <b>{mintAmount}</b>
          <IconButton
            className={classes.iconButton}
            onClick={increaseMintAmount}
            disabled={claimingNft}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className={classes.mintText}>
          <Button
            className={classes.button}
            onClick={onClickClaimNFT}
            disabled={claimingNft}
            size="large"
          >
            {!claimingNft ? (
              <div>Mint</div>
            ) : (
              <>
                <CircularProgress
                  style={{ color: "white" }}
                  className={classes.progressCircle}
                />
              </>
            )}
          </Button>
        </div>
        <Popup
          popupType={popupType}
          popupMsg={popupMsg}
          popupCount={popupCount}
        />
      </Container>
    </>
  );

  const mintCompletedDisplay = (
    <>
      <Typography variant="h3" className={classes.mintTitle}>
        Sold Out!
      </Typography>
      <Container className={classes.mintContainer} maxWidth="sm">
        <Typography variant="h5" className={classes.mintText}>
          {props.data.totalSupply} / {props.config.MAX_SUPPLY} minted
        </Typography>
        <Typography variant="h5" className={classes.mintText}>
          There are no more Mellow Heads left to be minted. Please check out the
          collection on OpenSea!
        </Typography>
      </Container>
    </>
  );

  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.gridRoot}>
      <Grid
        container
        wrap={"wrap"}
        spacing={0}
        alignItems={"center"}
        justifyContent={"center"}
        direction={collapse ? "column" : "row"}
      >
        <Grid item xs={collapse ? false : 4}>
          <center>
            <NFTgif gifNum={1} />
          </center>
        </Grid>
        <Grid item xs={collapse ? false : 4}>
          {mintingCompleted ? <>{mintCompletedDisplay}</> : <>{mintDisplay}</>}
        </Grid>
        {collapse ? (
          <></>
        ) : (
          <>
            <Grid item xs={4}>
              <center>
                <NFTgif gifNum={2} />
              </center>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default MintNFT;
