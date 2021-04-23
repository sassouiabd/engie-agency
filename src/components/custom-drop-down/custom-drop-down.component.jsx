import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function CustomDropDown() {
  return (
      <Autocomplete
        id='combo-box-demo'
        options={agencies}
        getOptionLabel={option => option.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label='Combo box' variant='outlined' />
        )}
      />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const agencies = [
  { name: "Agence de Lyon", respName: "Jean", activity: "Électrique" },
  { name: "Agence de Toulouse", respName: "Marc", activity: "Climatisation " },
  { name: "Agence de Paris", respName: "Sophie", activity: "Plomberie" },
  { name: "Agence de Grenoble", respName: "Claire", activity: "Électrique" },
  { name: "Agence de Rennes", respName: "Hugo", activity: "Électrique" },
];
