import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import usersActions from './actions/users';
import RouteFile from './components/RouteFile';
import theme from './components/theme';

const StyledApp = styled.div.attrs({
  className: 'w-full',
})`

`;

function App() {
  const { checkLoggedUser } = usersActions;

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('a');
    dispatch(checkLoggedUser());
  }, [dispatch, checkLoggedUser]);
  return (
    <StyledApp className="App">
      <ThemeProvider theme={theme}>

        <RouteFile />
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
