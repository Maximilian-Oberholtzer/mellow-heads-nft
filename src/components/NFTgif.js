import { Container } from "@material-ui/core";
import React from "react";
import MHgif1 from "../media/MHgif1.gif";
import MHgif2 from "../media/MHgif2.gif";

function NFTgif(props) {
  return (
    <>
      {props.gifNum == 1 ? (
        <img style={{ width: "50%" }} src={MHgif1} />
      ) : (
        <img style={{ width: "50%" }} src={MHgif2} />
      )}
    </>
  );
}

export default NFTgif;
