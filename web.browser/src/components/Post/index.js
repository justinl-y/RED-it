import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

const Post = ({ title, description, vote, updateVote }) => (
  <li className={styles.post}>
    <Card>
      <CardHeader>
        <h2>{ title }</h2>
      </CardHeader>
      <CardText>
        <p>{description}</p>
      </CardText>
      <FlatButton onClick={updateVote}>
        Vote {vote}
      </FlatButton>
    </Card>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired
};

export default Post;