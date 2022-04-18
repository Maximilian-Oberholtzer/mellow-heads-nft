import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "16px",
    padding: "20px",
  },
  title: {
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
}));

function Welcome() {
  const classes = useStyles();
  return (
    <div>
      <Container
        className={classes.container}
        style={{ backgroundColor: "#d1ccc4", border: "1px solid black" }}
      >
        <Typography className={classes.title} variant="h2">
          Welcome to Mellow Heads NFT
        </Typography>
        <Typography className={classes.subTitle}>
          Mellow Heads NFT is a collection of 5,000 algorithmically generated
          marshmallow characters living on the Polygon Blockchain.
        </Typography>
      </Container>
    </div>
  );
}

export default Welcome;
