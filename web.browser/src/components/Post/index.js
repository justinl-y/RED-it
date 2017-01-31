import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

const Post = ({ id, title, link, description, vote, onUpVoteClick, onDownVoteClick, categories }) => (
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
      <div className={styles['post-items']}>
        <div className={styles['post-buttons']}>
          <Chip
            className={styles['post-vote-button']}
          >
            Votes: { vote }
          </Chip>
          <FlatButton
            className={styles['post-vote-button']}
            onClick={(e) => { e.preventDefault(); onUpVoteClick(id); }}
          >
            &#42779; Vote Up
          </FlatButton>
          <FlatButton
            className={styles['post-vote-button']}
            onClick={(e) => { e.preventDefault(); onDownVoteClick(id); }}
          >
            Vote Down &#65516;
          </FlatButton>
        </div>
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

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  onUpVoteClick: PropTypes.func.isRequired,
  onDownVoteClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Post;
