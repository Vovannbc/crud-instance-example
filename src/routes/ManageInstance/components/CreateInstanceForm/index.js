import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Field, Formik } from "formik";
import { TextField, Button, Container } from "@material-ui/core";

const FormStyled = styled.form`
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
  .MuiTextField-root {
    margin: 10px;
    width: calc(50% - 20px);
  }
  .MuiButtonBase-root {
    width: 100%;
  }
`;

const CreateInstanceForm = ({ onSubmit, initialValues }) => {
  return (
    <Container maxWidth="sm">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          title: initialValues.title || "",
          description: initialValues.description || "",
          url: initialValues.url || "",
          image: initialValues.image || ""
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <FormStyled onSubmit={handleSubmit}>
            <Field
              component={TextField}
              onChange={handleChange}
              id="title"
              placeholder="title"
            />
            <Field
              component={TextField}
              onChange={handleChange}
              id="description"
              placeholder="description"
            />
            <Field
              component={TextField}
              onChange={handleChange}
              id="url"
              placeholder="url"
            />
            <Field
              component={TextField}
              onChange={handleChange}
              id="image"
              placeholder="image"
            />
            <Button variant="contained" color="primary" type="submit">
              Create instance
            </Button>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

CreateInstanceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};


export default CreateInstanceForm;
