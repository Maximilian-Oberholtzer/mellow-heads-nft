import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ConnectWallet from "./ConnectWallet";
import useStyles from "./Styles";
import MenuIcon from "@mui/icons-material/Menu";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";

const aboutClick = () => {
  Scroll.scroller.scrollTo("About", {
    duration: 1000,
    smooth: true,
  });
};

function Navbar(props) {
  const classes = useStyles();
  //media query to make navbar collapse
  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));
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
          {collapse ? (
            <Button>
              <MenuIcon className={classes.iconButton} />
            </Button>
          ) : (
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
              <Button onClick={aboutClick} className={classes.navTextButton}>
                About
              </Button>
              <Button className={classes.navTextButton}>Team</Button>
              <ConnectWallet
                dispatch={props.dispatch}
                blockchain={props.blockchain}
                getData={props.getData}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
