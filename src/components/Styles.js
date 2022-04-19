import { makeStyles } from "@material-ui/core";

const primaryColor = "#7D5A50";
const secondaryColor = "#FCDEC0";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: secondaryColor,
    height: "100vh",
  },
  //navbar
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: secondaryColor,
    boxShadow: "none",
  },
  flexbox: {
    display: "flex",
  },
  navTitle: {
    flexGrow: 1,
    color: primaryColor,
  },
  navTextButton: {
    marginRight: "12px",
    color: primaryColor,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      color: "#B4846C",
    },
  },
  //end navbar
  container: {
    marginTop: "24px",
    padding: "20px",
  },
  button: {
    backgroundColor: primaryColor,
    color: "white",
  },
  textButton: {
    color: primaryColor,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      color: "#B4846C",
    },
  },
  mintText: {
    textAlign: "center",
    color: primaryColor,
  },
  iconButton: {
    color: primaryColor,
  },
  progressCircle: {
    width: "25px !important",
    height: "25px !important",
  },
  //welcome
  title: {
    textAlign: "center",
    color: primaryColor,
    fontSize: "5rem",
  },
  subTitle: {
    textAlign: "center",
    color: primaryColor,
    fontSize: "1.5rem",
    marginTop: "16px",
  },
  //end welcome
  //popup
  popup: {
    position: "absolute",
    width: 250,
    backgroundColor: secondaryColor,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: primaryColor,
  },
  popupTitle: {
    fontSize: "2rem",
  },
  //end popup
}));

export default useStyles;
