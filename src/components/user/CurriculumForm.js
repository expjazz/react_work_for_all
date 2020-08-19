import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import usersActions from '../../actions/users';

const StyledCurriculumForm = styled.form.attrs({
  className: 'bg-white rounded px-8 pt-6 pb-8 mb-4',
})`
  & {
    label {
      ${tw`block text-gray-700 text-sm font-bold mb-2`}
    }

    input,
    textarea {
      ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    }
  }

  button {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  }
`;
const CurriculumForm = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const [redirect, setRedirect] = useState(false);
  const { signUpUser } = usersActions;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      about_me: '',
      children: 'data',
      married: 'data',
      cpf: 'data',
      race: 'race',
      nationality: 'data',
      country: 'data',
      cep: 'data',
      state: 'data',
      city: 'data',
      hood: 'data',
      street: 'data',
      cel: 'data',
      jobs: [],
    },
    validationSchema: Yup.object({
      cpf: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      state: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      city: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      street: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      cell: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),

    }),
    onSubmit: values => {
      console.log(values);
      // const { email, name, password } = values;
      // const newObj = {
      //   user: {
      //     email,
      //     password,
      //   },
      //   candidate: {
      //     name,
      //   },

      // };
      // dispatch(signUpUser(newObj));
      // setRedirect(true);
    },
  });
  return (
    <StyledCurriculumForm onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="about_me">About Me</label>
        <textarea type="text-area" id="about_me" rows="4" cols="50" onChange={formik.handleChange} value={formik.values.about_me} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>

      <div className="mb-4">
        <label htmlFor="children">children</label>
        <input type="text" id="children" onChange={formik.handleChange} value={formik.values.children} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>
    </StyledCurriculumForm>
  );
};

export default CurriculumForm;
