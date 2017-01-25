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

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import AppReducer from './containers/redux';

import './styles/index.css';
import muiTheme from './styles/mui-theme';
import MainLayout from './layouts/MainLayout';
import App from './containers/App';
import Login from './containers/Login';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// middleware
const actionLogger = theStore => next => (action) => {
  let result;
  console.info('DISPATCHING:', action);

  try {
    result = next(action);
    // add store to local storage
    localStorage.setItem('theStore', JSON.stringify(theStore.getState()));
    console.info('NEXT STATE', theStore.getState());
  } catch (e) {
    console.warn('There was an error!');
    throw (e);
  }

  return result;
};

// create store
const store = createStore(
  AppReducer,
  composeWithDevTools(
    applyMiddleware(actionLogger),
  ),
);

// render routes
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="login" component={Login} />
            <Route path="posts">
              <Route path="new" component={CreatePost} />
              <Route path=":topic-name" component={PostList} />
            </Route>
          </Route>
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
