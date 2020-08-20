import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import jobActions from '../../../actions/job';
import Input from '../../common/Input';

const StyledNewJobOpp = styled.div.attrs({
  className: 'content col-start-3 col-end-12 pt-10',
})``;

const OppForm = styled.form.attrs({
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

// :requirement, :salary, :position
const NewJobOpp = () => {
  const dispatch = useDispatch();
  const { addNewJob } = jobActions;
  const formik = useFormik({
    initialValues: {
      requirement: '',
      salary: '',
      position: '',
    },
    validationSchema: Yup.object({
      requirement: Yup.string().required('Please add a requirement'),
      salary: Yup.string().required('Please provide a salary'),
      position: Yup.string().required('Please provide a posigion'),
    }),
    onSubmit: ({ requirement, salary, position }) => {
      const newObj = {
        job_offer: {
          requirement,
          salary,
          position,
        },
      };
      dispatch(addNewJob(newObj));
      console.log(newObj);
    },
  });
  const jobArr = ['requirement', 'salary', 'position'];
  return (
    <StyledNewJobOpp>
      <OppForm onSubmit={formik.handleSubmit}>
        <div className="title">
          <h4>
            Add a new Opportunity
          </h4>
        </div>
        {jobArr.map(field => (
          <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />
        ))}
        <button type="submit">Submit</button>
      </OppForm>

    </StyledNewJobOpp>
  );
};

export default NewJobOpp;
