/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StyledForm = styled.form.attrs({
  className: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
})`
  & {
    label {
      ${tw`block text-gray-700 text-sm font-bold mb-2`}
    }

    input {
      ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    }
  }
`;
const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      email: Yup.string().email('It needs to be a valid email').required('Please Enter your email'),
      password: Yup.string().min(1, 'Needs to be bigger than 2 characters').required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
        ),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <StyledForm>
      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Email</label>
        <input type="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Password</label>
        <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
      </div>
      <div className="mb-4">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input type="password" id="passwordConfirmation" onChange={formik.handleChange} value={formik.values.passwordConfirmation} />
      </div>
    </StyledForm>
  );
};

export default Form;
