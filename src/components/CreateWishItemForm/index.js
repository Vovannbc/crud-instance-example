import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { TextField, Button, Container } from '@material-ui/core';

const FormStyled = styled.form`
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
`;

const CreateWishItemForm = ({ onSubmit, initialValues = {} }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: initialValues.title || '',
      description: initialValues.description || '',
      url: initialValues.url || '',
      image: initialValues.image || '',
      price: initialValues.price || ''
    },
    onSubmit: onSubmit
  });
  return (
    <Container maxWidth="sm">
      <FormStyled onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="title"
          placeholder="title"
          value={values.title}
        />
        <TextField
          onChange={handleChange}
          id="description"
          placeholder="description"
          value={values.description}
        />
        <TextField
          onChange={handleChange}
          id="url"
          placeholder="url"
          value={values.url}
        />
        <TextField
          onChange={handleChange}
          id="image"
          placeholder="image"
          value={values.image}
        />
        <TextField
          onChange={handleChange}
          id="price"
          placeholder="price"
          value={values.price}
        />
        <Button variant="contained" color="primary" type="submit">
          Create instance
        </Button>
      </FormStyled>
    </Container>
  );
};

// CreateWishItemForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   initialValues: PropTypes.object
// };

export default CreateWishItemForm;
