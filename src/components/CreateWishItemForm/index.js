import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { TextField, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { SubmitButton } from '../../common';

const FormStyled = styled.form`
  display: flex;
  flex-flow: row wrap;
`;

const TextFieldStyled = styled(TextField)`
  width: 50%;
  :nth-child(odd) {
    padding-right: 10px;
  }
  :nth-child(even) {
    padding-left: 10px;
  }
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
      <Box p={2.5}>
        <FormStyled onSubmit={handleSubmit}>
          <TextFieldStyled
            onChange={handleChange}
            id="title"
            label="title"
            value={values.title}
          />
          <TextFieldStyled
            onChange={handleChange}
            id="description"
            label="description"
            value={values.description}
          />
          <TextFieldStyled
            onChange={handleChange}
            id="url"
            label="url"
            value={values.url}
          />
          <TextFieldStyled
            onChange={handleChange}
            id="image"
            label="image"
            value={values.image}
          />
          <TextFieldStyled
            onChange={handleChange}
            id="price"
            label="price"
            value={values.price}
          />
          <SubmitButton fullWidth>Create instance</SubmitButton>
        </FormStyled>
      </Box>
    </Container>
  );
};

// CreateWishItemForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   initialValues: PropTypes.object
// };

export default CreateWishItemForm;
