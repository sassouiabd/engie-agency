import { makeStyles } from "@material-ui/core";

const S_spinner = makeStyles(theme => ({
  loaderContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
  },
}));

export default S_spinner;
