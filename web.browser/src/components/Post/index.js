import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

const Post = ({ title, link, description, vote, updateVote, categories }) => {
  return (
    <li className={styles['post-list']}>
      <Card className={styles['post-item']}>
        <CardHeader className={styles['post-header']}>
          <h2>
            <a href={link} rel="noopener noreferrer" target="_blank">{ title }</a>
          </h2>
        </CardHeader>
        <CardText>
          <p>{ description }</p>
        </CardText>
        <div className={styles['post-buttons']}>
          <FlatButton className={styles['post-vote-button']} onClick={updateVote}>
            Vote { vote }
          </FlatButton>
          <div className={styles['post-categories']}>
            {
              categories.map(e => (<Chip
                className={styles['post-chip']}
                key={`${e}-${Date.now()}`}
              >{e}
              </Chip>))
            }
          </div>
        </div>
      </Card>
    </li>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
