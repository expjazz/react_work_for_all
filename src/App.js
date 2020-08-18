import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import usersActions from './actions/users';
import RouteFile from './components/RouteFile';
import Navbar from './components/Navbar';
import theme from './components/theme';

const StyledApp = styled.div.attrs({
  className: 'w-full',
})`

`;

function App() {
  console.log(theme);
  const { checkLoggedUser } = usersActions;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLoggedUser());
  }, [dispatch]);
  return (
    <StyledApp className="App">
      <ThemeProvider theme={theme}>

        <Navbar />
        <RouteFile />
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
