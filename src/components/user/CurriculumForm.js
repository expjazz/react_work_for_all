import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import usersActions from '../../actions/users';
import Input from '../common/Input';
import PastJobs from './PastJobs';

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

const StyledPastJobs = styled.div`

      background: '';

`;
const CurriculumForm = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const [redirect, setRedirect] = useState(false);
  const { signUpUser } = usersActions;
  const dispatch = useDispatch();
  const [pastJobsState, setPastJobsState] = useState([]);
  const [allRefs, setAllRefs] = useState([]);
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
    initialValues: {
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
    },
    validationSchema: Yup.object({
      // cpf: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      // state: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      // city: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      // street: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),
      // cell: Yup.string().min(1, 'Needs to be bigger than 2 characters').required("it  Can't be empty"),

    }),
    onSubmit: values => {
      values.jobs = pastJobsState;
      const {
        about_me, country, cep, state, city, hood, street, cel, children, married, cpf, race, nationality, jobs,
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
      console.log('here');
      console.log(values);
      console.log(newCurr);
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
    // if (e.target.name === 'start') {
    //   const newIn = { ...inputValues, start: e.target.value };
    //   setInputValues(newIn);
    // } else if (e.target.name === 'end') {
    //   const newIn = { ...inputValues, end: e.target.value };
    //   setInputValues(newIn);
    // } else {
    //   const newIn = { ...inputValues, name: e.target.value };
    //   setInputValues(newIn);
    // }
  };
  const personalArr = ['children', 'married', 'cpf', 'race', 'nationality'];
  const addressArr = ['country', 'cep', 'state', 'city', 'hood', 'street', 'cel'];
  return (
    <StyledCurriculumForm onSubmit={formik.handleSubmit}>
      <div className="title">
        <h4>
          Personal info
        </h4>
      </div>
      <div className="mb-4">
        <label htmlFor="about_me">About Me</label>
        <textarea type="text-area" id="about_me" rows="4" cols="50" onChange={formik.handleChange} value={formik.values.about_me} />
        {formik.errors.name ? (
          <div>
            {formik.errors.name}
          </div>
        ) : ''}
      </div>

      {personalArr.map(field => (
        <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />

      ))}

      <button type="button" onClick={addNewJob}> Add a new past job</button>
      <StyledPastJobs>
        <h3>Old Jobs</h3>
        {pastJobsState.map((pJ, index) => <PastJobs onChange={addJobChange} ref={allRefs[index]} key={`input${index}`} inputs={pJ} />)}
      </StyledPastJobs>

      <div className="title">
        <h4>
          Address
        </h4>
      </div>

      {addressArr.map(field => (
        <Input label={field} key={field} id={field} onChange={formik.handleChange} labelValue={field} value={formik.values[field]} errors={formik.errors[field]} />

      ))}
      <button type="submit">Submit</button>

    </StyledCurriculumForm>
  );
};

export default CurriculumForm;
