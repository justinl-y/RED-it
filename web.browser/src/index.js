import React from 'react';
import ReactDOM from 'react-dom';
import {
   Router,
   Route,
   Link,
   IndexRoute,
   browserHistory 
} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import MainLayout from './layouts/MainLayout';
import App from './containers/App';
import Login from './containers/Login';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';

import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={MainLayout}> 
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="login" component={ Login } />
            <Route path="posts" component={ PostList }>
              <Route path="new" component={ CreatePost } />
              <Route path=":name" component={ PostList } />
            </Route>
          </Route>
        </Route>
      </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

/*<Route path="posts">
  <Route path="new" component={ CreatePost } />
  <Route path=":name" component={ PostList } />
</Route>*/