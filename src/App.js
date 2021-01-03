import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";
import useStyles from "./useStyles";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name missing"),
});

export default function SignUp() {
  const classes = useStyles();
  const [signedUp, setSignedUp] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Do we every submit?");
      console.log(values);
      setSignedUp(true);
    },
  });

  const { values, errors, handleSubmit, handleChange } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {signedUp ? (
          <Typography component="h1" variant="h5">
            Thanks for signing up! Please check your email for activation link.
          </Typography>
        ) : (
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label htmlFor="firstName">First Name</label>
                {/* Just used a simple input element to 
                ensure it's not Material-ui causing problems*/}
                <input
                  type="text"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {/* <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  helperText={errors.firstName ? errors.firstName : ""}
                /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I accept the terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                console.log("im clicked");
                console.log(values);
                handleSubmit();
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
