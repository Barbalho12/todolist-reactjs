import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

import FormDialogBlock from '../components/FormDialogBlock';

const Routes = ({user, blocks, setBlocks}) => {

  return (
    <Switch>
       {blocks.map((block) => {
            return (
              <Route key={`${block.id}`} path={`/${block.name}`} render={(props) => <Main block={block} setBlocks={setBlocks}/> } />
            );
        })}
      <Route key={`new`} path="/new" exact render={(props) => <FormDialogBlock user={user} blocks={blocks} />} />
    </Switch>
  );
}

export default Routes;