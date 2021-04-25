import SignUp from "../../pages/sign-up/sign-up.page";
import SignInPage from "../../pages/sign-in/sign-in.page";
import AgencyCollection from "../../pages/agency-collection/agency-collection.page";
import { selectIsSignIn } from "../../redux/user/user.selectors";
import { useSelector } from "react-redux";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";

const App = () => {
  const isSignIn = useSelector(selectIsSignIn);

  return (
    <HashRouter>
      <Container maxWidth='lg'>
        <Switch>
          <Route exact path='/'>
            {isSignIn ? <AgencyCollection /> : <Redirect to='/signin' />}
          </Route>
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/agency-collection'>
            {isSignIn ? <AgencyCollection /> : <Redirect to='/signin' />}
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
