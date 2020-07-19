
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import TaskItem from '../../components/TaskItem';

const useStyles = makeStyles((theme) => ({
    list:{
      maxHeight: 300, 
      overflow: 'auto',
      width: '100%',
      maxWidth: 360,
      justifyContent: "center",
      backgroundColor: theme.palette.background.paper,
      padding:'10px'
    }
}));

const TaskList = ({listItens, deleteAction, checkAction}) => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            {listItens.map((task) => {
                return (
                    <TaskItem task={task} key={`${task.id}`} deleteAction={deleteAction} checkAction={checkAction}/>
                );
            })}
        </List>
    );
}

export default TaskList;