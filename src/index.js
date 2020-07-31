import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Video from './screens/cadastro/Video';
import Categoria from './screens/cadastro/Categoria';
import Erro from './screens/Erro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={Video} />
      <Route path='/cadastro/categoria' component={Categoria} />
      <Route path='/' component={App} exact />
      <Route component={Erro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
