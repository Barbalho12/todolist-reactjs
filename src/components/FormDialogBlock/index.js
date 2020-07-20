import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import API from '../../API';

const useStyles = makeStyles((theme) => ({
  bottom: {
    marginTop: "100px",
    padding: "10px"
  }
}));


function FormDialogBlock({user, setBlocks}) {
  const [open, setOpen] = React.useState(false);
  const [nameBlock, setNameBlock] = React.useState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addBlock = (event) => {
    event.preventDefault();
    API.createBlock(user.email, nameBlock).then(response => {
      response.json().then( blocks => {

        API.getBlocksByUserEmail(user.email).then(response => {
          response.json().then( newBlocks => {
            setBlocks(newBlocks);
            setNameBlock("");
            handleClose();
          });
        });
      });
    });
  }
  return (
    <div>
      <Button className={classes.bottom}  color="primary" onClick={handleClickOpen}>
        Novo bloco
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar novo bloco de tarefas</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Novo bloco"
            type="text"
            fullWidth
            value={nameBlock} 
            onChange={ (e) => { setNameBlock(e.target.value)} }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addBlock} color="primary">
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

  export default FormDialogBlock;