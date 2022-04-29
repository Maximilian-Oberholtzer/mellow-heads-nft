import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./Styles";

function CreatorDetails() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.creatorDetailsTitle}>
        Meet the Creator
      </Typography>
    </div>
  );
}

export default CreatorDetails;
