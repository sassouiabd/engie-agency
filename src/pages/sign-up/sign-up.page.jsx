import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import S_signUp from "./sign-up.styles";
import Copyright from "../../components/copyright/copyright.component";
import { getServerAdress } from "../../utils";
import {
  setIsSignIn_act,
  setToken_act,
  setUserId_act,
} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const S = S_signUp();

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = async data => {
    const { email, password } = data;
    try {
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
        `${serverAdress}/auth/signup`,
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
          Sign up
        </Typography>
        <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                {...register("password")}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={S.submit}
            onClick={onSubmit}
            type='submit'
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
