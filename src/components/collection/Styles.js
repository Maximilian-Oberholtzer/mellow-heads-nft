import { makeStyles } from "@material-ui/core";

const primaryColor = "#7D5A50";
const secondaryColor = "#FCDEC0";
const tertiaryColor = "#B4846C";

const useStyles = makeStyles((theme) => ({
  collectionContainer: {
    marginTop: "-1px",
    backgroundColor: secondaryColor,
    minHeight: "100vh",
  },
  container: {
    padding: "2rem",
  },
  //welcome
  title: {
    textAlign: "center",
    color: primaryColor,
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
  },
  subTitle: {
    textAlign: "center",
    color: primaryColor,
    fontSize: "1.5rem",
    padding: "1rem",
  },
}));

export default useStyles;
