import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Styles";
import * as Scroll from "react-scroll";

function CreatorDetails() {
  const classes = useStyles();

  return (
    <div>
      <Scroll.Element id="CreatorDetails" name="CreatorDetails">
        <Typography variant="h3" className={classes.creatorDetailsTitle}>
          Meet the Creator
        </Typography>
      </Scroll.Element>
    </div>
  );
}

export default CreatorDetails;
