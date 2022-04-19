import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import useStyles from "./Styles";

function Welcome(props) {
  const classes = useStyles();

  const openMarketplace = () => {
    window.open(props.config.MARKETPLACE_LINK);
  };

  const openSmartContract = () => {
    window.open(props.config.SCAN_LINK);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Mellow Heads NFT
        </Typography>
        <Typography className={classes.subTitle}>
          Mellow Heads NFT is a collection of 5,000 algorithmically generated
          marshmallow characters living on the Polygon Blockchain.
        </Typography>
        <Typography className={classes.subTitle}>
          <Button onClick={openMarketplace} className={classes.textButton}>
            OpenSea Marketplace
          </Button>
          |
          <Button onClick={openSmartContract} className={classes.textButton}>
            Smart Contract Address
          </Button>
        </Typography>
      </Container>
    </div>
  );
}

export default Welcome;
