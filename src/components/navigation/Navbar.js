import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ConnectWallet from "./ConnectWallet";
import useStyles from "../main/Styles";
import MenuIcon from "@mui/icons-material/Menu";
import mellowHeadsLogo from "../../media/mellowHeadsLogo.svg";
import { Drawer, Box, List } from "@material-ui/core";
import * as Scroll from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  //media query to make navbar collapse
  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));

  // close drawer if open and scroll to selected element
  const scrollTo = async (element) => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      await new Promise((r) => setTimeout(r, 1));
      Scroll.scroller.scrollTo(element, {
        duration: 1000,
        smooth: true,
      });
    } else {
      Scroll.scroller.scrollTo(element, {
        duration: 1000,
        smooth: true,
      });
    }
  };

  const openMarketplace = () => {
    window.open(props.config.MARKETPLACE_LINK);
  };

  const openSmartContract = () => {
    window.open(props.config.SCAN_LINK);
  };

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(isOpen);
  };

  //only shows when screen width is small
  const drawer = (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className={classes.iconButton} />
      </Button>
      <Drawer
        className={classes.drawer}
        anchor={"right"}
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 200,
            textAlign: "center",
            marginTop: "24px",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ConnectWallet
              dispatch={props.dispatch}
              blockchain={props.blockchain}
              getData={props.getData}
              data={props.data}
            />
          </List>
          <List>
            <Button
              onClick={toggleDrawer(false)}
              className={classes.navTextButton}
              style={{ marginRight: "0" }}
            >
              <Link
                to="/collection"
                className={classes.navTextLink}
                style={{ textDecoration: "none" }}
              >
                Collection
              </Link>
            </Button>
          </List>
          <List>
            <Button
              onClick={() => scrollTo("FAQ")}
              className={classes.navTextButton}
              style={{ marginRight: "0" }}
            >
              FAQ
            </Button>
          </List>
          <List>
            <Button
              onClick={() => scrollTo("CreatorDetails")}
              className={classes.navTextButton}
              style={{ marginRight: "0" }}
            >
              Creator
            </Button>
          </List>
          <List>
            <Button
              onClick={openMarketplace}
              className={classes.navTextButton}
              style={{ marginRight: "0" }}
            >
              OpenSea
            </Button>
          </List>
          <Button
            onClick={openSmartContract}
            className={classes.navTextButton}
            style={{ marginRight: "0" }}
          >
            Contract
          </Button>
        </Box>
      </Drawer>
    </>
  );

  //shows when screen width is large
  const navbar = (
    <>
      <Button className={classes.navTextButton}>
        <Link
          to="/collection"
          className={classes.navTextLink}
          style={{ textDecoration: "none" }}
        >
          Collection
        </Link>
      </Button>
      <Button onClick={() => scrollTo("FAQ")} className={classes.navTextButton}>
        FAQ
      </Button>
      <Button
        onClick={() => scrollTo("CreatorDetails")}
        className={classes.navTextButton}
      >
        Creator
      </Button>
      <Button onClick={openMarketplace} className={classes.navTextButton}>
        OpenSea
      </Button>
      <Button onClick={openSmartContract} className={classes.navTextButton}>
        Contract
      </Button>
      <ConnectWallet
        dispatch={props.dispatch}
        blockchain={props.blockchain}
        getData={props.getData}
        data={props.data}
      />
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.navTitle}>
            <Button className={classes.navTextButton} style={{marginTop: "6px"}}>
              <Link
                to="/"
                className={classes.navTextLink}
                style={{ textDecoration: "none" }}
              >
                <img alt="" src={mellowHeadsLogo} style={{width: "38px"}}/>
              </Link>
              <Link
                to="/"
                className={classes.navTextLink}
                style={{ textDecoration: "none" }}
              >
                <Typography>NFT</Typography>
              </Link>      
            </Button>
          </Typography>
          {collapse ? drawer : navbar}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
