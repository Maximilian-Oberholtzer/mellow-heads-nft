import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";

function CollectionGrid(props) {
  const { blockchain, data } = props;
  //array of data from all the users tokens
  const tokenData = [];

  //Loop to get the json data for each owned Mellow Head
  const fetchTokenURI = async () => {
    for (let i = 0; i < data.ownerTokens.length; i++) {
      //Create ipfs link from tokenURI
      const tokenURL =
        "https://ipfs.io/ipfs/QmUFEJ7uKGkTfMMa1wNqPWjdBCa2n23zx78dbWFkFcLxX8/" +
        data.ownerTokens[i] +
        ".json";

      await fetch(tokenURL, {
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          tokenData[i] = data;
        });
    }
    console.log(tokenData);
  };

  useEffect(() => {
    if (blockchain && data.ownerTokens.length > 0) {
      console.log(blockchain, data);
      fetchTokenURI();
    }
  }, [data.ownerTokens]);

  return (
    <div>
      <Grid item xs={4}>
        <center>
          <img
            alt=""
            src="https://ipfs.io/ipfs/QmSBTxx73oxXYHZoQUgpQwpYQN5kb34mhChtEwy2gTW2pu/28.png"
            style={{ width: "256px" }}
          />
        </center>
      </Grid>
    </div>
  );
}

export default CollectionGrid;
