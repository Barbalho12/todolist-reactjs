import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, SidebarLink } from './styles';

import FormDialogBlock from '../FormDialogBlock';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  list: {
    color: "primary",
    marginTop: "10px"
  }
}));

const Sidebar = ({user, blocks, setBlocks}) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.list}></div>
        {blocks.map((block) => {
            return (
              <Button color="primary">
                <SidebarLink key={`${block.id}`} to={`/${block.name}`}>{block.name}</SidebarLink>
              </Button>
            );
        })}
        <FormDialogBlock user={user} setBlocks={setBlocks}/>
    </Container>
  );
}

export default Sidebar; 