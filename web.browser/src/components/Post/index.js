import React, { Component, PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';

// const Post = ({ id, title, link, description, votes, onUpVoteClick, tags, userId}) => (
class Post extends Component {
  /* constructor(props) {
    super(props);
  }*/

  handleClick() {
    // const login = this.getCleanFormData();
    // if (!login) return;

    const vote = { postId: this.props.postId, userId: this.props.userId };
    this.props.onUpVoteClick({ vote });
  }

  render() {
    return (
      <li className={styles['post-list']}>
        <Card className={styles['post-item']}>
          <CardHeader className={styles['post-header']}>
            <h2>
              <a href={this.props.link} rel="noopener noreferrer" target="_blank">{ this.props.title }</a>
            </h2>
          </CardHeader>
          <CardText>
            <p>{ this.props.description }</p>
          </CardText>
          <div className={styles['post-items']}>
            <div className={styles['post-buttons']}>
              <Chip
                className={styles['post-vote-button']}
              >
                Votes: { this.props.votes }
              </Chip>
              <FlatButton
                className={styles['post-vote-button']}
                // onClick={(e) => { e.preventDefault(); onUpVoteClick(id); }}
                onClick={(e) => { e.preventDefault(); this.handleClick(); }}
              >
                &#42779; Vote Up
              </FlatButton>
            </div>
            <div className={styles['post-categories']}>
              {
                this.props.tags.map(e => (e.tags_id !== null ?
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
  }
}

Post.propTypes = {
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  onUpVoteClick: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  userId: PropTypes.number.isRequired,
};

export default Post;
