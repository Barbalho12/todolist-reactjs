import React, { useEffect } from 'react';

import Home from './Home';

import API from './API';

import Signup from './components/Signup'

import Button from '@material-ui/core/Button';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [showSignup, setShowSignup] = React.useState(false);

  useEffect(() => {
    const email = localStorage.getItem('@todo-app/username');
    if (email != null) {
      API.getUserByEmail(email).then(response => {
        if(response.status===200){
          response.json().then( user => {
            setUser(user);
          });
        }else{
          localStorage.removeItem('@todo-app/username');
        }
      });
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const email = e.target.elements.username.value;
    API.getUserByEmail(email).then(response => {
      console.log(response);
      if(response.status===200){
        response.json().then( user => {
          setUser(user);
          localStorage.setItem('@todo-app/username', user.email);
        });
      }else{
        alert("Não foi possível encontrar o usuário!");
      }
      
    });
  };

  const signup = (e) =>{
    e.preventDefault(); 
    setShowSignup(true)
  }

  if (user !== null) {
    return (
      <Home user={user}/>
    );
  } else {
    return (
      <div style={styles.center}>
        <form style={styles.container} onSubmit={handleSubmit}>
          <input style={styles.username} type="text" name="username" placeholder="Email do usuário" required />
          <button type="submit" style={styles.submitButton}>Entrar</button>
          <Button onClick={ signup  } color="primary">
            Cadastre-se
          </Button>
        </form>
        {showSignup ?
           <Signup setUser={setUser} setOpen={setShowSignup} />  :
           null
        }
      </div>
    );
  }
}

const styles = {
  center:{
    width: '100%',
    display: 'flex',
    justifyContent: "center"
  },
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
  
    width: 400,
    justifyContent: "center",
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
    background: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    padding: '30px 20px'
  },
  submitButton: {
    height: '40px',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 0,
    color: '#fff',
    background: '#009587',
    marginTop: '5px',
  },
  username: {
    height: '40px',
    padding: '0 15px',
    border: '1px solid #eee',
    borderRadius: '4px',
    marginBottom: '10px',
    color: '#444'
  }
}

export default App;