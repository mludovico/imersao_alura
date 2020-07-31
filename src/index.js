import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CadastroVideo from './screens/CadastroVideo';
import Erro from './screens/Erro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/' component={App} exact />
      <Route component={Erro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
