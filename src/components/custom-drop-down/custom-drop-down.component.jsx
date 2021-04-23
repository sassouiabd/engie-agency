import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useTheme } from "@material-ui/core";

export default function CustomDropDown({ data, action }) {
  const t = useTheme();

  return (
    <Autocomplete
      value={data[0].nom}
      onChange={(event, newValue) => {
        if (action && newValue) {
          const { ID } = newValue;
          action(ID);
        }
      }}
      id='combo-box-demo'
      options={data}
      getOptionLabel={option => option.Nom}
      style={{ width: 300, margin: `${t.spacing(1)}px 0px` }}
      renderInput={params => (
        <TextField {...params} label='Agence' variant='outlined' />
      )}
    />
  );
}
