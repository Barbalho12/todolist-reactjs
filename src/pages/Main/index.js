import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';

import Card from '@material-ui/core/Card';
import TodoList from '../../components/TodoList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    padding:'10px'
  },
  container: {
    flexDirection: 'column',

  },
  title: {
    margin:"20px",
    color: theme.palette.primary.main,
  }
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1 className={classes.title}>TODO List</h1>
      <Card className={classes.root}>
        <TodoList/>
      </Card>
    </Container>
  );
}

export default Main;