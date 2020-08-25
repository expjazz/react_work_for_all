/* eslint-disable camelcase */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input';
import PastJobs from './PastJobs';
import curriculumActions from '../../actions/curriculum';
import StyledGreenButton from '../common/GreenButton';

const StyledCurriculumForm = styled.form.attrs({
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

`;

const StyledPastJobs = styled.div`
  ${tw`py-8`}
`;
const CurriculumForm = () => {
  console.log('here');
  const { personalArr, addressArr } = useSelector(state => state.users.infoArrays);
  const [firstRender, setFirstRender] = useState(false);

  const curriculum = useSelector(state => state.users.curriculum);

  const { createCurriculum, updateCurriculum } = curriculumActions;
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const [pastJobsState, setPastJobsState] = useState([]);
  const [allRefs, setAllRefs] = useState([]);

  const generateInputVals = arr => {
    const newObj = {};
    arr.forEach(fields => {
      Object.keys(fields).forEach(field => { newObj[field] = fields[field]; });
    });
    return newObj;
  };

  let formValues = {};
  if (!curriculum) {
    formValues = {
      about_me: '',
      children: '',
      married: '',
      cpf: '',
      race: '',
      nationality: '',
      country: '',
      cep: '',
      state: '',
      city: '',
      hood: '',
      street: '',
      cel: '',
      jobs: [],
    };
  } else {
    const {
      header, address, personal, pastJobs,
    } = curriculum;
    formValues = generateInputVals([header, address, personal]);
    if (pastJobsState.length === 0 && !firstRender) {
      const tempJobs = [];
      const tempRefs = [];
      pastJobs.forEach(job => {
        const newRef = React.createRef();
        tempRefs.push(newRef);
        tempJobs.push(job);
      });
      setFirstRender(true);
      setAllRefs([...allRefs, ...tempRefs]);
      setPastJobsState([...pastJobsState, ...tempJobs]);
    }
  }
  const addNewJob = () => {
    const inputs = {
      start: '',
      end: '',
      name: '',
    };
    const newRef = React.createRef();
    setAllRefs([...allRefs, newRef]);
    setPastJobsState([...pastJobsState, inputs]);
  };
  const formik = useFormik({
    initialValues: { ...formValues },
    validationSchema: Yup.object({
      cpf: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      state: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      city: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      street: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      cel: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),

    }),
    onSubmit: values => {
      values[jobs] = pastJobsState;
      const {
        about_me, country, cep, state,
        city, hood, street, cel, children, married, cpf, race, nationality, jobs,
      } = values;
      const newCurr = {
        curriculum: {
          candidate_address: {
            country,
            cep,
            state,
            city,
            hood,
            street,
            cel,
          },
          candidate_personal: {
            children,
            married,
            cpf,
            race,
            nationality,
          },
          jobs,
          about_me,
        },
      };
      setRedirect(true);

      if (!curriculum) {
        dispatch(createCurriculum(newCurr));
      } else {
        dispatch(updateCurriculum({
          ...newCurr,
          curriculum_id: curriculum
            .personal.curriculum_id,
        }));
      }
    },
  });
  const addJobChange = (e, curRef) => {
    const y = allRefs.forEach((ref, ind) => {
      if (ref === curRef) {
        const copy = [...pastJobsState];
        const fields = curRef.current.querySelectorAll('input');
        copy[ind] = {
          start: fields[0].value,
          end: fields[1].value,
          name: fields[2].value,
        };
        setPastJobsState([...copy]);
      }
    });
  };

  return (
    <StyledCurriculumForm onSubmit={formik.handleSubmit}>
      {redirect ? <Redirect to="/users/user" /> : ''}

      <div className="title">
        <h4>
          Personal info
        </h4>
      </div>
      <div className="mb-4">
        <label htmlFor="about_me">
          About Me
          <textarea
            type="text-area"
            id="about_me"
            rows="4"
            cols="50"
            onChange={formik
              .handleChange}
            value={formik.values.about_me}
          />
        </label>
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>

      {personalArr.map(field => (
        <Input
          label={field}
          key={field}
          id={field}
          onChange={formik
            .handleChange}
          labelValue={field}
          value={formik.values[field]}
          errors={formik.errors[field]}
        />

      ))}
      <StyledGreenButton type="button" onClick={addNewJob}>
        {' '}
        Add a new past job

      </StyledGreenButton>

      <StyledPastJobs>
        <h3>Old Jobs</h3>
        {pastJobsState
          .map((pJ, index) => (
            <PastJobs
              onChange={addJobChange}
              ref={allRefs[index]}
              key={index}
              inputs={pJ}
            />
          ))}
      </StyledPastJobs>

      <div className="title">
        <h4>
          Address
        </h4>
      </div>

      {addressArr.map(field => (
        <Input
          label={field}
          key={field}
          id={field}
          onChange={formik
            .handleChange}
          labelValue={field}
          value={formik.values[field]}
          errors={formik.errors[field]}
        />

      ))}
      <StyledGreenButton type="submit">
        Submit
      </StyledGreenButton>

    </StyledCurriculumForm>
  );
};

export default CurriculumForm;
