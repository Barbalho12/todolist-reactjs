import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../API';



function Signup({setUser, setOpen}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const addUser = (event) => {
    event.preventDefault();
    const user = {name, email, password};

    if(name && name.length >= 1 && email && email.length >= 1 && password && password.length >= 1){
        API.createUser(user).then(response => {
            
            if(response.code === 200 || response.code === 201){
                response.json().then( newUser => {
                
                    setUser(newUser);
                });
            }else{
                alert("Não foi possível criar o usuário!");
            }
            
        });
    }else{
        alert("dados inválidos!");
    }
    
  }
  return (
    <div>
      {/* <Button className={classes.bottom}  color="primary" onClick={addUser}>
        <AddIcon/>
        Novo bloco
      </Button> */}
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastre-se</DialogTitle>
        <DialogContent>
          <TextField autoFocus id="name" label="Nome" type="text" fullWidth
            value={name} onChange={ (e) => { setName(e.target.value)} } />
        </DialogContent>

        <DialogContent>
          <TextField autoFocus id="email" label="Email" type="email" fullWidth
            value={email}  onChange={ (e) => { setEmail(e.target.value)} }/>
        </DialogContent>

        <DialogContent>
          <TextField autoFocus id="password" label="Password" type="password" fullWidth
            value={password}  onChange={ (e) => { setPassword(e.target.value)} }/>
        </DialogContent>

        <DialogActions>
          <Button onClick={addUser} color="primary">
            Adicionar
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

  export default Signup;