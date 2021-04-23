import React from "react";
import CustomDropDown from "../../components/custom-drop-down/custom-drop-down.component";
import CustomTable from "../../components/custom-table/custom-table.component";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const agencies = [
  { Nom: "Agence de Lyon", Responsable: "Jean", Activité: "Électrique" },
  {
    Nom: "Agence de Toulouse",
    Responsable: "Marc",
    Activité: "Climatisation ",
  },
  { Nom: "Agence de Paris", Responsable: "Sophie", Activité: "Plomberie" },
  { Nom: "Agence de Grenoble", Responsable: "Claire", Activité: "Électrique" },
  { Nom: "Agence de Rennes", Responsable: "Hugo", Activité: "Électrique" },
];

export default function Welcom() {
  return (
    <div>
      <CustomDropDown />
      <CustomTable data={agencies[2]} />
    </div>
  );
}
