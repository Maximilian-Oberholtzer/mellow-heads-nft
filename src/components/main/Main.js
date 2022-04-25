import React from "react";
import MintNFT from "./MintNFT";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import FAQ from "./FAQ";

function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Welcome config={props.config} />
      <MintNFT
        dispatch={props.dispatch}
        config={props.config}
        blockchain={props.blockchain}
        getData={props.getData}
        data={props.data}
      />
      <FAQ />
    </div>
  );
}

export default Main;
