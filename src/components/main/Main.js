import React from "react";
import MintNFT from "./MintNFT";
import Welcome from "./Welcome";
import useStyles from "./Styles";
import About from "./About";

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
      <About />
    </div>
  );
}

export default Main;
