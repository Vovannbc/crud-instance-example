import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { SubmitButton } from '../../common';

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  & > * {
    margin-bottom: 20px;
    width: 100%;
  }
`;

const AuthForm = ({ title, onSubmit }) => (
  <Box>
    <Title>{title}</Title>
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
        <Form onSubmit={handleSubmit} autoComplete="off">
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
          <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
          {isSubmitting && <CircularProgress />}
        </Form>
      )}
    </Formik>
  </Box>
);

export default AuthForm;
