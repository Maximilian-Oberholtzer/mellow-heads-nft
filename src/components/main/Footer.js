import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import polygonLogo from "../../media/polygonLogo.png";

function Footer() {
  const classes = useStyles();
  return (
    <>
      <center>
        <Container className={classes.container}>
          <Typography className={classes.footerTitle} variant="h2">
            Powered By {"  "}
          </Typography>
          <img alt="" src={polygonLogo} style={{ marginTop: "12px" }} />
        </Container>
      </center>
      <Container className={classes.footer}>This is the footer</Container>
    </>
  );
}

export default Footer;
