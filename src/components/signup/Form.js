/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import usersActions from '../../actions/users';
import jobActions from '../../actions/job';
import { storage } from '../../firebase/firebase';

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

  button {
    ${tw`hover:bg-orange-700 mt-8 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}

    background: ${props => props.theme.yellow};
  }
`;
const Form = () => {
  const [imageAsFile, setImageAsFile] = useState('');
  const { addAllJobs } = jobActions;

  const [redirect, setRedirect] = useState(false);
  const { signUpUser } = usersActions;
  const dispatch = useDispatch();
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
      const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
      uploadTask.on('state_changed',
        snapShot => {
          console.log(snapShot);
        }, err => {
          console.log(err);
        }, () => {
          storage.ref('images').child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
              const { email, name, password } = values;
              const newObj = {
                user: {
                  email,
                  password,
                },
                candidate: {
                  name,
                  image_url: fireBaseUrl,
                },

              };
              dispatch(signUpUser(newObj));
              dispatch(addAllJobs());

              setRedirect(true);
            });
        });
    },
  });
  const handleImageChange = e => {
    e.persist();
    const image = e.target.files[0];
    setImageAsFile(() => (image));
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {redirect ? <Redirect to="/users/user" /> : ''}
      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? (
          <div>
            {formik.errors.email}
          </div>
        ) : ''}

      </div>
      <div className="mb-4">
        <label htmlFor="name">Password</label>
        <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? (
          <div>
            {formik.errors.password}
          </div>
        ) : ''}

      </div>
      <div className="mb-4">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input type="password" id="passwordConfirmation" onChange={formik.handleChange} value={formik.values.passwordConfirmation} />
        {formik.errors.passwordConfirmation ? (
          <div>
            {formik.errors.passwordConfirmation}
          </div>
        ) : ''}

      </div>
      <div className="image">
        <label htmlFor="image">Image Upload</label>
        <input type="file" name="image" onChange={handleImageChange} />
      </div>
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default Form;
