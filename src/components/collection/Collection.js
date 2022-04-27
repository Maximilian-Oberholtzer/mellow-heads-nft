import React from "react";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import CollectionGrid from "./CollectionGrid";

function Collection(props) {
  const classes = useStyles();

  return (
    <div className={classes.collectionContainer}>
      <Welcome blockchain={props.blockchain} data={props.data} />
      <CollectionGrid blockchain={props.blockchain} data={props.data} />
    </div>
  );
}

export default Collection;
