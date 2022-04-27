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
  //scrollTop
  scrollTopVisible: {
    borderRadius: "60px",
    height: "40px",
    width: "30px",
    backgroundColor: primaryColor,
    color: "white",
    "&:hover": {
      backgroundColor: tertiaryColor,
    },
    right: "15px",
    bottom: "15px",
    opacity: "1",
    transition: "transform .4s ease, opacity .4s ease, 0.3s",
    position: "fixed",
  },
  scrollTopHidden: {
    borderRadius: "60px",
    height: "40px",
    width: "30px",
    backgroundColor: primaryColor,
    color: "white",
    "&:hover": {
      backgroundColor: tertiaryColor,
    },
    right: "15px",
    bottom: "15px",
    opacity: "0",
    transition: "transform .4s ease, opacity .4s ease, 0.3s",
    pointerEvents: "none",
    position: "fixed",
  },
  //end scrollTop
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
  //end welcome
  //grid container
  gridContainer: {
    maxWidth: "80%",
    margin: "auto",
    flexGrow: "1",
  },
  gridCard: {
    margin: "auto",
    backgroundColor: secondaryColor,
    boxShadow: "none",
  },
  cardText: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: primaryColor,
    textAlign: "center",
    marginRight: "1.6rem",
  },
  loadingText: {
    fontSize: "3rem",
    color: primaryColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "40vh",
  },
}));

export default useStyles;
