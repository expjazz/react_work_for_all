import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import tw from 'tailwind.macro';
import { positionQuery } from '../../reducers/filterSlice';

const StyledForm = styled.form.attrs({
  className: 'w-full text-center',
})`
  input {
    ${tw`outline-none w-full rounded-sm h-10 text-black`}
  }
`;

export default function SearchForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      jobField: '',
    },
    onSubmit: values => {
      dispatch(positionQuery(values.jobField));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div className="input">
        <input type="text" id="jobField" onChange={formik.handleChange} value={formik.values.jobField} placeholder="Search a Job to interview" />
      </div>
      <button type="submit">submit</button>
    </StyledForm>
  );
}
