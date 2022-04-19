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
            <Button className={classes.navTextButton}>MHNFT</Button>
          </Typography>
          {collapse ? (
            <Button>
              <MenuIcon className={classes.iconButton} />
            </Button>
          ) : (
            <>
              <Button className={classes.navTextButton}>Collection</Button>
              <Button className={classes.navTextButton}>About</Button>
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
