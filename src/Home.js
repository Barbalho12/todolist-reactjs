import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserInfo from './components/UserInfo';
import Routes from './routes';
import API from './API';
import GlobalStyle, { Container } from './styles';

function Home({user}) {

  const [blocks, setBlocks] = React.useState([]);

  useEffect(() => {
      API.getBlocksByUserEmail(user.email).then(response => {
        response.json().then( blocks => {
          console.log(blocks);
          setBlocks(blocks);
        });
      });
  }, []);

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Sidebar user={user} blocks={blocks} setBlocks={setBlocks}/>
        <Routes user={user} blocks={blocks} setBlocks={setBlocks}/>
        <UserInfo user={user}/>
      </Container>
    </BrowserRouter>
  );

}

export default Home;