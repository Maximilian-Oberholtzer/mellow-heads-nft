import "./App.css";
import Main from "./components/Main.js";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Sniglet", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
