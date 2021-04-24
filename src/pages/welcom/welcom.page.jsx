import React from "react";
import CustomDropDown from "../../components/custom-drop-down/custom-drop-down.component";
import CustomTable from "../../components/custom-table/custom-table.component";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { S_welcom } from "./welcom.styles";
import { selectChoice } from "../../redux/user/user.selectors";
import { setChoice_act, setIsSignIn_act } from "../../redux/user/user.actions";
import { Button } from "@material-ui/core";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const agencies = [
  {
    ID: 0,
    Nom: "Agence de Lyon",
    Responsable: "Jean",
    Activité: "Électrique",
  },
  {
    ID: 1,
    Nom: "Agence de Toulouse",
    Responsable: "Marc",
    Activité: "Climatisation ",
  },
  {
    ID: 2,
    Nom: "Agence de Paris",
    Responsable: "Sophie",
    Activité: "Plomberie",
  },
  {
    ID: 3,
    Nom: "Agence de Grenoble",
    Responsable: "Claire",
    Activité: "Électrique",
  },
  {
    ID: 4,
    Nom: "Agence de Rennes",
    Responsable: "Hugo",
    Activité: "Électrique",
  },
];

export default function Welcom() {
  const S = S_welcom();
  const choice = useSelector(selectChoice);
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();
    dispatch(setIsSignIn_act(false));
  };

  return (
    <Container maxWidth='lg' className={S.root}>
      <Button variant='contained' color='secondary' onClick={logout}>
        Logout
      </Button>
      <CustomDropDown
        data={agencies}
        action={val => {
          dispatch(setChoice_act(val));
        }}
      />
      <CustomTable data={choice >= 0 ? agencies[choice] : undefined} />
    </Container>
  );
}
