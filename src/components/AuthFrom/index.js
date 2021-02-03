import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      marginBottom: 20,
      width: '100%'
    }
  },
  container: {
    maxWidth: 500,
    margin: '0 auto'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}));

const AuthForm = ({ title, onSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form
            className={classes.form}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <TextField
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            {isSubmitting && <CircularProgress />}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
