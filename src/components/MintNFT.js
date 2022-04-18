import React, { useState } from "react";
import { fetchData } from "../redux/data/dataActions";
import { Button } from "@material-ui/core";

function MintNFT(props) {
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click mint to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const { blockchain } = props;

  function onClickClaimNFT(e) {
    e.preventDefault();
    if (blockchain.account && blockchain.smartContract && blockchain.account) {
      //proceed with minting
      claimNFTs();
      props.getData();
    } else {
      console.log("Wallet not connected!");
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

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <div>
      <Button onClick={onClickClaimNFT}>Mint</Button>
      {blockchain.account === null ||
      blockchain.smartContract === null ||
      blockchain.account === undefined ? (
        <div>Please connect wallet before Minting</div>
      ) : (
        <div>{feedback}</div>
      )}
    </div>
  );
}

export default MintNFT;
