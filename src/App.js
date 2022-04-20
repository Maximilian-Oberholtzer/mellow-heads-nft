import React from "react";
import "./App.css";
import Navbar from "./components/main/Navbar";
import Main from "./components/main/Main";
import Collection from "./components/collection/Collection";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Config from "./Config";

function App() {
  //set global font theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Sniglet", "cursive"].join(","),
    },
  });

  //initiate blockchain data shared among components
  const { dispatch, blockchain, data, config, getData } = Config();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar dispatch={dispatch} blockchain={blockchain} getData={getData} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                dispatch={dispatch}
                blockchain={blockchain}
                getData={getData}
                config={config}
                data={data}
              />
            }
          />
          <Route exact path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
