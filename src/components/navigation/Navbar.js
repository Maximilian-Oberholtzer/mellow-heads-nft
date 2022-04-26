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
import mellowHeadsLogo from "../../media/mellowHeadsLogo.png";
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
            />
          </List>
          <List>
            <Button
              onClick={toggleDrawer(false)}
              className={classes.navTextButton}
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
            >
              FAQ
            </Button>
          </List>
          <List>
            <Button className={classes.navTextButton}>Team</Button>
          </List>
          <List>
            <Button onClick={openMarketplace} className={classes.navTextButton}>
              OpenSea
            </Button>
          </List>
          <Button onClick={openSmartContract} className={classes.navTextButton}>
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
      <Button className={classes.navTextButton}>Team</Button>
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
      />
    </>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.navTitle}>
            <Button className={classes.navTextButton}>
              <Link
                to="/"
                className={classes.navTextLink}
                style={{ textDecoration: "none" }}
              >
                MHNFT
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
