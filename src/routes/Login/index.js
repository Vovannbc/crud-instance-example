import React from 'react';
import { Formik } from "formik";
import styled from 'styled-components';
import { Form, Input, Button } from '@bootstrap-styled/v4';

const FormStyled = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
`

const InputStyled = styled(Input)`
  margin-bottom: 20px;
`

const Login = () => {

  const loginSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={loginSubmit}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
          <FormStyled onSubmit={handleSubmit}>
            <InputStyled
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <InputStyled
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting} block>
              Submit
            </Button>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default Login;
