import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button:{
      margin: "10px",
      width:"90%"
    },
    inputtext: {
      margin: "10px",
      width: "90%"
    }
}));

const CreateTaskForm = ({createTask}) => {
    const [newTaskDescription, setNewTaskDescription] = React.useState("");
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(newTaskDescription);
        setNewTaskDescription("");
    }

    return (
        <form className={classes.inputtext} onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField id="standard-basic" value={newTaskDescription} label="Nova tarefa" onChange={ (e) => { setNewTaskDescription(e.target.value)} } className={classes.inputtext} />
        <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>ADICIONAR</Button>
        </form>
    );
}

export default CreateTaskForm;