import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

import ClearIcon from '@material-ui/icons/Clear';

const TaskItem = ({task, deleteAction, checkAction}) => {
  return (
      <ListItem role={undefined} dense button onClick={checkAction(task)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            tabIndex={task.id}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={`checkbox-description-${task.id}`} primary={task.description} />
          <IconButton edge="end" color="secondary" aria-label="clear" onClick={() => {deleteAction(task.id)} } >
            <ClearIcon />
          </IconButton>
      </ListItem>
  );
}

export default TaskItem;