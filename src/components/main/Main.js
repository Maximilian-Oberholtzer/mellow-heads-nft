import React from "react";
import MintNFT from "./MintNFT";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import FAQ from "./FAQ";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default Main;
