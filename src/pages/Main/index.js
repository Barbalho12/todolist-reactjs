import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from './styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TodoList from '../../components/TodoList';
import API from '../../API';

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
  },
  delete:{
    fontSize:"10pt"
  }
}));

const Main = ({block, setBlocks}) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(block);
  }, []);

  const removeBlock = () => {
    API.removeBlock(block.id).then(response => {
        if(response.status != 400 || response.status != 500 || response.status != 404){
          

          API.getBlocksByUserEmail(block.user.email).then(response => {
            response.json().then( newBlocks => {
              setBlocks(newBlocks);
            });
          });
        }
    });
      
  }

  return (
    <Container className={classes.container}>
      <h1 className={classes.title}>{block.name}</h1>
      <Card className={classes.root}>
        <TodoList block={block}/>
      </Card>
      <Button className={classes.delete} onClick={removeBlock} color="secondary"> Remover</Button>
    </Container>
  );
}

export default Main;