import { createSelector } from 'reselect';

const selectJobsPerQuery = query => createSelector(
  state => state.jobOffers.index.all,
  all => all.filter(job => job.position.toLowerCase().includes(query.toLowerCase())),
);

export default { selectJobsPerQuery };
