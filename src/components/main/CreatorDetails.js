import React from "react";
import {
  Typography,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import useStyles from "./Styles";
import * as Scroll from "react-scroll";
import mellowHead from "../../media/mellowHead.png";

function CreatorDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Scroll.Element id="CreatorDetails" name="CreatorDetails">
        <Typography variant="h3" className={classes.creatorDetailsTitle}>
          Meet the Creator
        </Typography>
        <center>
          <Grid
            container
            direction={collapse ? "column" : "row"}
            className={classes.creatorDetailsGrid}
          >
            <Grid item xs={collapse ? false : 6}>
              <Typography className={classes.creatorNameText}>Feed!</Typography>
              <img
                alt=""
                src={mellowHead}
                style={{ width: "30vh", borderRadius: "6px" }}
              />
            </Grid>
            <Grid item xs={collapse ? false : 6}>
              <Typography className={classes.creatorNameText}>About</Typography>
              <Container
                className={classes.creatorDetailsContainer}
                maxWidth="sm"
              >
                <Typography variant="h5" className={classes.mintText}>
                  Feed! (aka Maximilian) is an experienced full stack software
                  enginner with strong interests in blockchain technology,
                  cryptocurrencies and NFTs. Aside from programming, he is a top
                  100 Rocket League player, a former collegiate tennis athlete
                  and a content creator.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </center>
      </Scroll.Element>
    </div>
  );
}

export default CreatorDetails;
