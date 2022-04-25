import React from "react";
import MHgif1 from "../../media/MHgif1.gif";
import MHgif2 from "../../media/MHgif2.gif";

function NFTgif(props) {
  return (
    <>
      {props.gifNum === 1 ? (
        <img
          alt=""
          style={{ width: "30vh", borderRadius: "6px" }}
          src={MHgif1}
        />
      ) : (
        <img
          alt=""
          style={{ width: "30vh", borderRadius: "6px" }}
          src={MHgif2}
        />
      )}
    </>
  );
}

export default NFTgif;
