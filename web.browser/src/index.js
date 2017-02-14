import React from 'react';
import ReactDOM from 'react-dom';
import {
   Router,
   Route,
   IndexRoute,
   browserHistory, // Miss, Match, BrowserRouter,
} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/index.css';
import muiTheme from './styles/mui-theme';

import MainLayout from './layouts/MainLayout';
import App from './containers/App';
import ProcessLogin from './containers/ProcessLogin';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';
import NotFound from './components/NotFound';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// render routes
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="/posts">
              <Route path="new" component={CreatePost} />
              <Route path=":category" component={PostList} />
            </Route>
          </Route>
          <Route path="login" component={ProcessLogin} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

/* ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);*/

/* <Match pattern="/posts/new" component={CreatePost} />
<Match path="/posts" component={PostList} />
<Match exactly path="/" component={MainLayout} />
<Miss
  render={() => (
    <div>404!</div>
  )}
/> */
