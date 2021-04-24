import React from "react";

//Material UI ---
import { CircularProgress } from "@material-ui/core";

import S_spinner from "./spinner.styles";

const Spinner = ({ text = "" }) => {
  const S = S_spinner();
  return (
    <div className={S.loaderContainer}>
      <CircularProgress size={60} />
    </div>
  );
};

export default Spinner;
