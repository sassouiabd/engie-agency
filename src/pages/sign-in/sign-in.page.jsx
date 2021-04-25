import Copyright from "../../components/copyright/copyright.component";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

//Redux
import {
  setEmail_act,
  setIsSignIn_act,
  setPassword_act,
  setToken_act,
  setUserId_act,
} from "../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

// Styles
import signIn_S from "./sign-in.styles";
import { selectEmail, selectPassword } from "../../redux/user/user.selectors";
import { useHistory } from "react-router-dom";
import { getServerAdress } from "../../utils";

export default function SignIn() {
  const S = signIn_S();
  const dispatch = useDispatch();
  let history = useHistory();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const onEmailChange = e => {
    dispatch(setEmail_act(e.target.value));
  };

  const onPasswordChange = e => {
    dispatch(setPassword_act(e.target.value));
  };

  const signIn = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({
          email,
          password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: body,
          redirect: "follow",
        };

        const serverAdress = getServerAdress();
        const response = await fetch(
          `${serverAdress}/auth/signin`,
          requestOptions
        );
        const res = await response.json();
        const { error, token, userId } = res;
        if (!error && token && userId) {
          dispatch(setIsSignIn_act(true));
          dispatch(setToken_act(token));
          dispatch(setUserId_act(userId));
          history.push("/agency-collection");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={S.paper}>
        <Avatar className={S.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={S.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='cy_email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={onEmailChange}
            defaultValue={email}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='Password'
            label='Password'
            type='password'
            id='cy_password'
            autoComplete='current-password'
            onChange={onPasswordChange}
            defaultValue={password}
          />
          <Button
            id='cy_submitSignin'
            fullWidth
            variant='contained'
            color='primary'
            className={S.submit}
            onClick={signIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                variant='body2'
                onClick={() => {
                  history.push("/signup");
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
