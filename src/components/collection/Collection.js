import React from "react";
import Welcome from "./Welcome";
import useStyles from "./Styles";

function Collection(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.collectionContainer}>
      <Welcome blockchain={props.blockchain} data={props.data} />
    </div>
  );
}

export default Collection;
