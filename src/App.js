import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import usersActions from './actions/users';
import RouteFile from './components/RouteFile';
import Navbar from './components/Navbar';

const StyledApp = styled.div.attrs({
  className: 'w-full',
})`

`;
function App() {
  const { checkLoggedUser } = usersActions;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedUser());
  }, [dispatch]);
  return (
    <StyledApp className="App">
      <Navbar />
      <RouteFile />
    </StyledApp>
  );
}

export default App;
