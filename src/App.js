import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div.attrs({
  className: 'w-full bg-red-800',
})`

`;
function App() {
  return <StyledApp className="App">test</StyledApp>;
}

export default App;
