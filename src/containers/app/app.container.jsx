import SignInPage from "../../pages/sign-in/sign-in.page";
import WelcomPage from "../../pages/welcom/welcom.page";
import { selectIsSignIn } from "../../redux/user/user.selectors";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";

const App = () => {
  const isSignIn = useSelector(selectIsSignIn);

  return (
    <Router>
      <Container maxWidth='lg'>
        <Switch>
          <Route exact path='/'>
            {isSignIn ? <WelcomPage /> : <Redirect to='/signin' />}
          </Route>
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/welcom'>
            {isSignIn ? <WelcomPage /> : <Redirect to='/signin' />}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
