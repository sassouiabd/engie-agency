import Copyright from "../../components/copyright/copyright.component";
import packageJson from "../../../package.json";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

//Redux
import { setEmail_act, setPassword_act } from "../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

// Styles
import signIn_S from "./sign-in.styles";
import { selectEmail, selectPassword } from "../../redux/user/user.selectors";

export default function SignIn() {
  const S = signIn_S();
  const dispatch = useDispatch();

  const signInEmail = useSelector(selectEmail);
  const signInPassword = useSelector(selectPassword);

  const onEmailChange = e => {
    dispatch(setEmail_act(e.target.value));
  };

  const onPasswordChange = e => {
    dispatch(setPassword_act(e.target.value));
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
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={onEmailChange}
            defaultValue={signInEmail}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={onPasswordChange}
            defaultValue={signInPassword}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={S.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright website={packageJson.name} />
      </Box>
    </Container>
  );
}
