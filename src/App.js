import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Routes from './routes';

import GlobalStyle, { Container } from './styles';

import Main from './pages/Main';

const App = () =>  {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        {/* <Routes /> */}
        <Main />
      </Container>
    </BrowserRouter>
  );
}

export default App;