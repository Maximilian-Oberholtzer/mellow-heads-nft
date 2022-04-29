import {
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import polygonLogo from "../../media/polygonLogo.png";
import pinataLogo from "../../media/pinataLogo.png";
import ipfsLogo from "../../media/IPFSlogo.png";
import twitterLogo from "../../media/twitterLogo.png";

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));

  const openTwitter = () => {
    window.open("https://twitter.com/MellowHeads_NFT");
  };

  return (
    <>
      <center>
        <Container className={classes.container}>
          <Typography className={classes.footerTitle} variant="h2">
            Powered By {"  "}
          </Typography>
          <Grid
            container
            direction={collapse ? "column" : "row"}
            className={classes.footerGrid}
          >
            <Grid item xs={collapse ? false : 4}>
              <img
                alt=""
                src={pinataLogo}
                className={classes.gridImg}
                style={{
                  paddingBottom: "3rem",
                  width: "200px",
                }}
              />
            </Grid>
            <Grid item xs={collapse ? false : 4}>
              <img
                alt=""
                src={polygonLogo}
                className={classes.gridImg}
                style={{
                  paddingBottom: "3rem",
                  width: "250px",
                  marginTop: "0.8rem",
                }}
              />
            </Grid>
            <Grid item xs={collapse ? false : 4}>
              <img
                alt=""
                src={ipfsLogo}
                className={classes.gridImg}
                style={{ paddingBottom: "3rem", width: "200px" }}
              />
            </Grid>
          </Grid>
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
          style={{
            width: "3.5rem",
            cursor: "pointer",
            marginTop: "16px",
            borderRadius: "16px",
          }}
        />
      </Container>
    </>
  );
}

export default Footer;
