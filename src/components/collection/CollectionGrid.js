import { Grid, createTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./Styles";

function CollectionGrid(props) {
  const classes = useStyles();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 750,
        md: 1450,
      },
    },
  });
  const { blockchain, data } = props;
  //array of data from all the users tokens
  const [tokenData, setTokenData] = useState([]);

  //Loop to get the json data for each owned Mellow Head
  const fetchTokenURI = async () => {
    const tokenList = [];
    for (let i = 0; i < data.ownerTokens.length; i++) {
      //Create ipfs link from tokenURI
      const tokenURL =
        "https://ipfs.io/ipfs/QmUFEJ7uKGkTfMMa1wNqPWjdBCa2n23zx78dbWFkFcLxX8/" +
        data.ownerTokens[i] +
        ".json";

      const response = await fetch(tokenURL, {
        headers: {
          Accept: "application/json",
        },
      });

      const token = await response.json();
      tokenList.push(token);
    }
    setTokenData(tokenList);
  };

  useEffect(() => {
    if (blockchain && data.ownerTokens.length > 0) {
      console.log(blockchain, data);
      fetchTokenURI();
    }
  }, [data.ownerTokens]);

  console.log(tokenData);
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Grid container spacing={0} className={classes.gridContainer}>
          {tokenData.map((token, index) => (
            <Grid item xs={12} sm={6} md={3} key={token.name}>
              <center>
                <img
                  alt=""
                  src={`https://ipfs.io/ipfs/QmSBTxx73oxXYHZoQUgpQwpYQN5kb34mhChtEwy2gTW2pu/${token.edition}.png`}
                  style={{ width: "256px" }}
                />
              </center>
            </Grid>
          ))}
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default CollectionGrid;
