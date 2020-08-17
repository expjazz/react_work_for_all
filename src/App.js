import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import signUpUser from './actions/users';

const StyledApp = styled.div.attrs({
  className: 'w-full bg-red-800',
})`

`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signUpUser.signUpUser());
  }, [dispatch]);
  return <StyledApp className="App">test</StyledApp>;
}

export default App;
