import React, { useEffect } from 'react';

import Home from './Home';

import API from './API';

const App = () => {
  const [user, setUser] = React.useState(null);


  useEffect(() => {
    const email = localStorage.getItem('@todo-app/username');
    if (email != null) {
      API.getUserByEmail(email).then(response => {
        response.json().then( user => {
          setUser(user);
        });
      });
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const email = e.target.elements.username.value;
    API.getUserByEmail(email).then(response => {
      console.log(response);
      response.json().then( user => {
        setUser(user);
        localStorage.setItem('@todo-app/username', user.email);
      });
    });
  };

  if (user !== null) {
    return (
      <Home user={user}/>
    );
  } else {
    return (
      <form style={styles.container} onSubmit={handleSubmit}>
        <input style={styles.username} type="text" name="username" placeholder="Email do usuário" required />
        <button type="submit" style={styles.submitButton}>Entrar</button>
      </form>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    minWidth: '300px',
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