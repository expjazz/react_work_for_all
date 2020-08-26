/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import curriculumActions from '../actions/curriculum';
import usersActions from '../actions/users';

const { createCurriculum } = curriculumActions;
const defaultState = {

  currentUser: '',
  error: [],
  status: 'idle',
  interviews: [{}],
  infoArrays: {
    personalArr: ['children', 'married', 'cpf', 'race', 'nationality'],
    addressArr: ['country', 'cep', 'state', 'city', 'hood', 'street', 'cel'],
    compPersonalArr: ['cnpj', 'aboutUs', 'size'],
  },
};
const {
  signUpUser, checkLoggedUser, signUpUserCompany,
  loginUser, addNewJob, setUpInterviewCandidate,
  updateInterviewStatus, signOut, updateCompanyInfo,
} = usersActions;
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: '',
    status: 'idle',
    interviews: [{}],
    infoArrays: {
      personalArr: ['children', 'married', 'cpf', 'race', 'nationality'],
      addressArr: ['country', 'cep', 'state', 'city', 'hood', 'street', 'cel'],
      compPersonalArr: ['cnpj', 'aboutUs', 'size'],
    },
  },
  reducers: {
    usersUpdateComp: {
      reducer(state, action) {
        let job = '';
        const ind = state.company.jobOffers.findIndex(x => {
          job = x.candidates.find(y => y.id === action.payload.candidate_id);
          return job && x.id === action.payload.job_offer_id;
        });
        console.log(ind);
        console.log(job);
        state.company.jobOffers[ind].approved.push(job);
      },
    },
    updateInterviewStatusSync(state, action) {
      console.log('object');
      console.log(state);
      const { interviews } = state;
      const index = interviews.findIndex(x => x
        .candidate_id === action.payload.candidate_id && x
        .company_id === action.payload.company_id && x
        .job_offer_id === action.payload.job_offer_id);
      interviews[index] = action.payload;
    },
  },
  extraReducers: {
    [addNewJob.pending]: state => { state.status = 'loading'; },
    [addNewJob.fulfilled]: (state, action) => {
      let jobOffers = [];
      if (state.company.jobOffers) {
        jobOffers = [...state.company.jobOffers, action.payload];
      } else {
        jobOffers = [action.payload];
      }

      const company = { ...state.company, jobOffers };
      return { ...state, company, status: 'fulfilled' };
    },

    [signUpUser.pending]: state => { state.status = 'loading'; },

    [signUpUser.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', currentUser: action.payload }),

    [signOut.fulfilled]: () => (defaultState),

    [updateInterviewStatus.pending]: state => { state.status = 'loading'; },

    [updateInterviewStatus.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', updated: [action.payload] }),

    [setUpInterviewCandidate.pending]: state => { state.status = 'loading'; },

    [setUpInterviewCandidate.fulfilled]: (state, action) => {
      const interviews = [...state.interviews, action.payload];
      return ({ ...state, status: 'fullfiled', interviews });
    },

    [checkLoggedUser.pending]: state => { state.status = 'loading'; },

    [checkLoggedUser.fulfilled]: (state, action) => {
      if (action.payload.companyInfo) {
        return ({
          ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, company: action.payload.companyInfo, interviews: action.payload.interviews,
        });
      } if (action.payload.curriculum) {
        return ({
          ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, curriculum: action.payload.curriculum, interviews: action.payload.interviews,
        });
      } if (action.payload.message === 'no user logged in') {
        return ({
          ...state, status: 'rejected', currentUser: action.payload,
        });
      }
      return ({
        ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, curriculum: action.payload.curriculum,

      });
    },
    [checkLoggedUser.rejected]: state => { state.status = 'rejected'; },

    [signUpUserCompany.pending]: state => { state.status = 'loading'; },

    [signUpUserCompany.fulfilled]: (state, action) => ({
      ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, company: action.payload.companyInfo,
    }),

    [updateCompanyInfo.pending]: state => { state.status = 'loading'; },

    [updateCompanyInfo.fulfilled]: (state, action) => ({
      ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, company: action.payload.companyInfo,
    }),

    [loginUser.pending]: state => { state.status = 'loading'; },
    [loginUser.rejected]: state => { state.error = 'Error with your info'; state.status = 'wrong'; },

    [loginUser.fulfilled]: (state, action) => {
      if (action.payload.message) {
        return ({
          ...state, status: 'wrong', error: action.payload.message,
        });
      }
      if (action.payload.companyInfo) {
        return ({
          ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, company: action.payload.companyInfo, interviews: action.payload.interviews,
        });
      } if (action.payload.curriculum) {
        return ({
          ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, curriculum: action.payload.curriculum, interviews: action.payload.interviews,
        });
      }
      return ({
        ...state, status: 'fullfiled', currentUser: { user: action.payload.user }, curriculum: action.payload.curriculum,

      });
    },

    [createCurriculum.pending]: state => { state.status = 'loading'; },
    [createCurriculum.fulfilled]: (state, action) => ({ ...state, status: 'fullfiled', curriculum: action.payload }),
  },
});

export const { updateInterviewStatusSync, usersUpdateComp } = userSlice.actions;

export default userSlice.reducer;
