import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

const Post = ({ id, title, link, description, votes, onUpVoteClick, onDownVoteClick, tags }) => (
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
            Votes: { votes }
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
            tags.map(e => (e.tags_id !== null ?
              <Chip
                className={styles['post-chip']}
                key={`${Math.random() * Date.now()}`}
              >
                {e.tags_title}
              </Chip> : null))
          }
        </div>
      </div>
    </Card>
  </li>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  onUpVoteClick: PropTypes.func.isRequired,
  onDownVoteClick: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Post;
