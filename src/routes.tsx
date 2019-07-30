import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Root from './components/Root'
import Header from './components/Header'
import IndexPage from './pages/index'
import Register from './pages/register'
import Login from './pages/login'
import Books from './pages/books'
import settingCurrentUser from './pages/settingCurrentUser';
import adminPanel from './pages/admin-panel';

const Routes: React.SFC = () => (
  <Root>
    <Header/>
    <Switch>
      <Route exact path="/" component={IndexPage} />
       <Route path="/register" component={Register} />
      <Route path="/login" component={Login} /> 
      <Route path="/books" component={Books} />
      <Route path="/admin-panel" component={adminPanel} />
      <Route path="/setting-user" component={settingCurrentUser} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Root>
)

export default Routes
