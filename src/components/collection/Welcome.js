import React, { useEffect, useState } from "react";
import useStyles from "./Styles";
import { Container, Typography } from "@material-ui/core";

function Welcome(props) {
  const classes = useStyles();
  const { blockchain, data } = props;

  const [collectionStatus, setCollectionStatus] = useState(
    "You must connect your wallet to see your Mellow Heads!"
  );

  //Check the amount of Mellow Heads the user owns
  useEffect(() => {
    if (blockchain) {
      console.log(data);
      if (data.ownerTokens.length > 0) {
        setCollectionStatus(
          "You own " + data.ownerTokens.length + " Mellow Heads!"
        );
      } else {
        setCollectionStatus("You do not own any Mellow Heads!");
      }
    }
  }, [blockchain, data]);

  return (
    <div>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Collection
        </Typography>
        <Typography className={classes.subTitle}>{collectionStatus}</Typography>
      </Container>
    </div>
  );
}

export default Welcome;
