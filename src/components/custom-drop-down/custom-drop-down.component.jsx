import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { selectAgenciesData } from "../../redux/agencies/agencies.selectors";
import { useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setChoice_act } from "../../redux/user/user.actions";

export default function CustomDropDown() {
  const t = useTheme();

  const agencies = useSelector(selectAgenciesData);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      onChange={(e, newValue) => {
        if (agencies) {
          dispatch(setChoice_act(newValue));
        }
      }}
      id='combo-box-demo'
      options={Object.values(agencies)}
      getOptionLabel={option => option.Nom}
      style={{ width: 300, margin: `${t.spacing(1)}px 0px` }}
      renderInput={params => (
        <TextField {...params} label='Agence' variant='outlined' />
      )}
    />
  );
}
