import { createSelector } from 'reselect';

const currentUserInfo = createSelector(
  state => state.users.currentUser,
  currentUser => {
    if (!currentUser.user) return '';
    const obj = {
      name: currentUser.user.name,
      email: currentUser.user.generalInfo.email,
    };
    return obj;
  },
);

export default { currentUserInfo };
