import { makeStyles } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles((theme) => ({
  //navbar
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#F1DDBF",
    boxShadow: "none",
  },
  flexbox: {
    display: "flex",
  },
  navTitle: {
    flexGrow: 1,
    color: "#525E75",
  },
  navTextButton: {
    marginRight: "12px",
    color: "#525E75",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
    },
  },
  //end navbar
  container: {
    marginTop: "24px",
    padding: "20px",
  },
  button: {
    backgroundColor: "#525E75",
    color: "white",
  },
  mintText: {
    textAlign: "center",
    color: "#525E75",
  },
  progressCircle: {
    width: "17px !important",
    height: "17px !important",
  },
  title: {
    textAlign: "center",
    color: "#525E75",
  },
  subTitle: {
    textAlign: "center",
    color: "#525E75",
    fontSize: "1.5rem",
    marginTop: "16px",
  },
  popup: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
