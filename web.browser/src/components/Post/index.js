import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

const Post = ({ title, link, description, vote, updateVote, categories }) => (
  <li className={ styles['post'] }>
    <Card>
      <CardHeader>
        <h2><a href={ link } target="_blank">{ title }</a></h2>
      </CardHeader>
      <CardText>
        <p>{ description }</p>
      </CardText>
      <div className={ styles['post-buttons'] }>
        <FlatButton onClick={ updateVote } className={ styles['vote-button'] }>
          Vote { vote }
        </FlatButton>
        <div className={ styles['category-chips'] }>
          {
            categories.map(( e, i ) => ( <Chip key={ i + e }>{ e }</Chip> ))
          }
        </div>
      </div>
    }
    </Card>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default Post;