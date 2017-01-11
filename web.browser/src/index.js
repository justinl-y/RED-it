import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';
import HeaderBar from './components/HeaderBar';
import Categories from './containers/Categories';
import Week from './containers/Week';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import Post from './components/Post';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainLayout>
      <HeaderBar />
      <App>
        <Categories>
          <Week />
        </Categories>
        <Welcome />
        <Login />
        <CreatePost />
        <PostList>
          <Post />
        </PostList>
      </App>
    </MainLayout>
  </MuiThemeProvider>,
  document.getElementById('root')
);