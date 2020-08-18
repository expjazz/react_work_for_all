import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import tw from 'tailwind.macro';

const StyledForm = styled.form.attrs({
  className: 'w-full',
})`
  input {
    ${tw`outline-none w-full rounded-sm h-10 text-black`}
  }
`;

export default function SearchForm() {
  const formik = useFormik({
    initialValues: {
      jobField: '',
    },
    onSubmit: values => {
      console.log(values);
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
