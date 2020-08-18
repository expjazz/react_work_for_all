import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import usersActions from './actions/users';

const StyledApp = styled.div.attrs({
  className: 'w-full bg-red-800',
})`

`;
function App() {
  const { signUpUser, checkLoggedUser } = usersActions;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedUser());
  }, [dispatch]);
  return <StyledApp className="App">test</StyledApp>;
}

export default App;
