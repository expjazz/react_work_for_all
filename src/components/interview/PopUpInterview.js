import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import userActions from '../../actions/users';

const StyledPopUpInterview = styled.div.attrs({
  className: 'absolute transition-all duration-700 ',
})`
  height: 20rem;
  width: 40rem;
  top: 25%;
  left: 25%;
  background: ${props => props.theme.white};

  form {
    ${tw`content-center `}

    height: 75%;

    div {
      ${tw`text-center `}
    }

    input {
      ${tw`outline-none pt-28 h-16 w-11/12 rounded`}

      justify-self: center;
    }
  }

  button {
    ${tw`outline-none`}

    background: ${props => props.theme.green};
  }

`;
const PopUpInterview = ({
  show, dNone, hide, companyId, jobId,
}) => {
  const dispatch = useDispatch();
  const { setUpInterviewCandidate } = userActions;
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const formik = useFormik({
    initialValues: {
      date: today,
      time: '',
    },
    onSubmit: values => {
      const str = `${values.date} / ${values.time}`;

      dispatch(setUpInterviewCandidate({ company_id: companyId, job_offer_id: jobId, time: str }));
    },
  });
  return (
    <StyledPopUpInterview className={`${show ? 'opacity-100' : 'opacity-0'} ${dNone ? 'hidden' : 'block'}`}>
      <button type="button" onClick={hide}>
        close
      </button>
      <form onSubmit={formik.handleSubmit} className="grid">
        <div className="day grid">
          <label htmlFor="date">

            {' '}
            Date
            <input type="date" name="date" id="date" value={formik.values.date} onChange={formik.handleChange} />
          </label>

        </div>
        <div className="clock grid">
          <label htmlFor="time">
            {' '}
            Time
            <input type="time" name="time" id="time" value={formik.values.time} onChange={formik.handleChange} />
          </label>
        </div>
        <button type="submit"> Submit </button>
      </form>
      <div />
    </StyledPopUpInterview>
  );
};

export default PopUpInterview;

// onClick={() => dispatch(setUpInterviewCandidate({ company_id: job.profileId, job_offer_id: job.jobId }))}
