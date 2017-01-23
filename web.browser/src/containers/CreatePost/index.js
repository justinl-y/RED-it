import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import NewPost from '../../components/NewPost';
// import styles from './styles.css'

const items = [
  <MenuItem key={1} value={1} primaryText="React" />,
  <MenuItem key={2} value={2} primaryText="React-DOM" />,
  <MenuItem key={3} value={3} primaryText="Redux" />,
];

class CreatePost extends Component {
  state = {
    // categories: data.data.weeks,
    selectFieldValue: null,
  };

  handleSelectChange = (
    (event, index, value) => (this.setState({ value }))
  );

  render() {
    return (
      <NewPost
        selectFieldValue={this.state.selectFieldValue}
        handleSelectChange={this.handleSelectChange.bind(this)}
        selectControlItems={items}
      />
    );
  }
}

export default CreatePost;
