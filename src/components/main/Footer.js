import { Container, Typography, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import polygonLogo from "../../media/polygonLogo.png";
import twitterLogo from "../../media/twitterLogo.png";

function Footer() {
  const classes = useStyles();

  const openTwitter = () => {
    window.open("https://twitter.com");
  };

  return (
    <>
      <center>
        <Container className={classes.container}>
          <Typography className={classes.footerTitle} variant="h2">
            Powered By {"  "}
          </Typography>
          <img alt="" src={polygonLogo} style={{ paddingBottom: "3rem" }} />
        </Container>
      </center>
      <Container className={classes.footer}>
        <Typography className={classes.footerText} variant="h2">
          Join the community and follow the Mellow Heads NFT official Twitter
          account!
        </Typography>
        <img
          onClick={openTwitter}
          alt=""
          src={twitterLogo}
          style={{ width: "3.5rem", cursor: "pointer", marginTop: "16px" }}
        />
      </Container>
    </>
  );
}

export default Footer;
