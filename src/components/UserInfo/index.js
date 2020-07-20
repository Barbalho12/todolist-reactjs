import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    topRigth:{
        position:"absolute",
        right:"10px",
        top:"10px"

    }
}));

const LogutButton = () => {
    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem('@todo-app/username');
        window.location.reload();
    }


    return (
        <Button color="primary" onClick={handleLogout} className={classes.btlogout}>SAIR</Button>
    );
    
}

const UserInfo = ({user}) => {
    const classes = useStyles();

    return (
        <div className={classes.topRigth}>
            <h2>{user.name}</h2>
            <LogutButton />
        </div>
    );
    
}

export default UserInfo;