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
    marginRight: "1rem",
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
    padding: "2rem",
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
    //marginTop: "24px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    backgroundColor: "#ffecd8",
    padding: "1rem",
    borderRadius: "12px",
    maxWidth: "450px",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },
  gridRoot: {
    flexGrow: 1,
    //marginTop: "48px",
    padding: "2rem 2rem 4rem 2rem",
  },
  mintTitle: {
    textAlign: "center",
    color: primaryColor,
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3rem",
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
    padding: "1rem",
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
    //marginTop: "24px",
    padding: "3rem",
    paddingTop: "1rem",
  },
  accordianTitle: {
    fontSize: "3rem",
    color: primaryColor,
  },
  accordianDetails: {
    borderTop: "2px solid " + secondaryColor,
  },
  accordianText: {
    textAlign: "center",
    color: primaryColor,
  },
  //end accordian
  //footer
  footerTitle: {
    paddingBottom: "0",
    fontSize: "3rem",
    color: primaryColor,
  },
  footer: {
    padding: "3rem",
    maxWidth: "100%",
    textAlign: "center",
    backgroundColor: primaryColor,
    padding: "2rem",
  },
  footerText: {
    fontSize: "2rem",
    color: secondaryColor,
  },
}));

export default useStyles;
