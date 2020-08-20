import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/common/Input';

const StyledCompanyForm = styled.div.attrs({
  className: 'bg-white rounded px-8 pt-6 pb-8 mb-4 w-full',
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
const CompanyEditForm = () => {
  const { user } = useSelector(state => state.users.currentUser);
  const { address, personal, header } = useSelector(state => state.users.company);
  const generateInputVals = arr => {
    const newObj = {};
    arr.forEach(fields => {
      Object.keys(fields).forEach(field => {
        newObj[field] = fields[field];
      });
    });
    return newObj;
  };

  const formValues = generateInputVals([header, personal, address]);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      ...formValues,
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <StyledCompanyForm onSubmit={formik.handleSubmit}>
      <div className="title">
        <h4>
          General Info
        </h4>
      </div>

      <div className="mb-4">
        <label htmlFor="header">Header</label>
        <textarea type="text-area" id="header" rows="4" cols="50" onChange={formik.handleChange} value={formik.values.header} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>

      {Object.keys(formValues).map(field => (
        <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />
      ))}
    </StyledCompanyForm>
  );
};

export default CompanyEditForm;
