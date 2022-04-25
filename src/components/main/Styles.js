import { makeStyles } from "@material-ui/core";

const primaryColor = "#7D5A50";
const secondaryColor = "#FCDEC0";
const tertiaryColor = "#B4846C";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "-1px",
    backgroundColor: secondaryColor,
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
      color: tertiaryColor,
    },
  },
  navTextLink: {
    color: primaryColor,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      color: tertiaryColor,
    },
  },
  drawer: {
    "& div.MuiPaper-root": {
      backgroundColor: secondaryColor,
    },
  },
  //end navbar
  container: {
    padding: "20px",
  },
  button: {
    backgroundColor: primaryColor,
    color: "white",
    "&:hover": {
      backgroundColor: tertiaryColor,
    },
  },
  textButton: {
    color: primaryColor,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      color: tertiaryColor,
    },
  },
  //mint container
  mintContainer: {
    marginTop: "24px",
    padding: "20px",
  },
  gridRoot: {
    flexGrow: 1,
    marginTop: "48px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
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
    width: "26px !important",
    height: "26px !important",
  },
  //end mint container
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
    marginTop: "16px",
  },
  //end welcome
  //popup
  popup: {
    position: "absolute",
    width: 250,
    backgroundColor: secondaryColor,
    border: "2px solid #000",
    borderRadius: "6px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: primaryColor,
  },
  popupTitle: {
    fontSize: "2rem",
  },
  //end popup
  //accordian
  accordian: {
    backgroundColor: "#ffecd8",
  },
  accordianRoot: {
    width: "66%",
    marginTop: "24px",
  },
  accordianTitle: {
    marginTop: "48px",
    fontSize: "3rem",
    color: primaryColor,
    [theme.breakpoints.down("sm")]: {
      marginTop: "12px",
    },
  },
  accordianText: {
    textAlign: "center",
    color: primaryColor,
  },
  //end accordian
  //footer
  footerTitle: {
    marginTop: "48px",
    fontSize: "3rem",
    color: primaryColor,
    [theme.breakpoints.down("sm")]: {
      marginTop: "12px",
    },
  },
  footer: {
    maxWidth: "100%",
    textAlign: "center",
    backgroundColor: primaryColor,
    minHeight: "30vh",
    marginTop: "48px",
  },
}));

export default useStyles;
