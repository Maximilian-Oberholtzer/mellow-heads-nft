import {
  Grid,
  createTheme,
  MuiThemeProvider,
  Typography,
  Card,
} from "@material-ui/core";
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
    typography: {
      fontFamily: ["Sniglet", "cursive"].join(","),
    },
  });
  const { blockchain, data } = props;
  //array of data from all the users tokens
  const [tokenData, setTokenData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Loop to get the json data for each owned Mellow Head
  const fetchTokenURI = async () => {
    const tokenList = [];
    setIsLoading(true);
    for (let i = 0; i < data.ownerTokens.length; i++) {
      //Create ipfs link from tokenURI
      const tokenURL =
        "https://mellowheads.mypinata.cloud/ipfs/QmUFEJ7uKGkTfMMa1wNqPWjdBCa2n23zx78dbWFkFcLxX8/" +
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
    setIsLoading(false);
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
        {isLoading ? (
          <Typography className={classes.loadingText}>Loading...</Typography>
        ) : (
          <Grid container spacing={0} className={classes.gridContainer}>
            {tokenData.map((token, index) => (
              <Card className={classes.gridCard} key={token.name}>
                <Grid item>
                  <center>
                    <img
                      alt=""
                      src={`https://mellowheads.mypinata.cloud/ipfs/QmSBTxx73oxXYHZoQUgpQwpYQN5kb34mhChtEwy2gTW2pu/${token.edition}.png`}
                      style={{ width: "256px" }}
                    />
                  </center>
                </Grid>
                <center>
                  <Typography className={classes.cardText}>
                    # {token.edition}
                  </Typography>
                </center>
              </Card>
            ))}
          </Grid>
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default CollectionGrid;
