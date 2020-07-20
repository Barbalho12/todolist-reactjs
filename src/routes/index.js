import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

import FormDialogBlock from '../components/FormDialogBlock';

const Routes = ({user, blocks}) => {

  return (
    <Switch>
       {blocks.map((block) => {
            return (
              <Route key={`${block.id}`} path={`/${block.name}`} render={(props) => <Main block={block} /> } />
            );
        })}
      <Route path="/new" exact render={(props) => <FormDialogBlock user={user} blocks={blocks} />} />
    </Switch>
  );
}

export default Routes;