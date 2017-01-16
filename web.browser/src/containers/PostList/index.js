import React, { Component } from 'react';
import styles from './styles.css';
import PostToolbar from '../../components/PostToolbar';
import Post from './../../components/Post';
import * as data from '../../mock-data';

class PostList extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      posts: data.data.posts,
      orderBy: 'newest'
    }
  }

  // re-sort the posts - needs work
  componentDidUpdate( posts ) {
    switch ( this.state.orderBy ) {
      case 'newest':
        //console.log('newest happened');
        break;
      case 'popular':
        //console.log('popular happened');
        break;
      default:
        break;
    }
  }

  // sort by votes
  sortPopular( posts ){
    const popularPosts = posts.sort( ( a, b ) => {
      return ( Number( b.votes ) - Number( a.votes ) );
    })

    this.setState({ posts: popularPosts });
    this.setState({ orderBy: 'popular' });
  };

  // sort by id
  sortNewest( posts ){
    const newestPosts = posts.sort( ( a, b ) => {
      return ( Number( a.id ) - Number( b.id ) );
    })

    this.setState({ posts: newestPosts });
    this.setState({ orderBy: 'newest' });
  }; 

  updateVote( item ) {
    const votedPosts = this.state.posts.map(( e ) => {
      if ( e.id === item.id ) {
        e.votes += 1;
      }

      return e;
    })

    this.setState({ posts: votedPosts })
  };

  /*renderPosts( postList ) {
    const renderedPosts = postList.map(( e ) => ( 
                            <Post
                              title={ e.title }
                              link={ e.link }
                              key={ e.id }
                              description={ e.description }
                              vote={ e.votes }
                              updateVote={ this.updateVote.bind( this, e )}
                              categories={ e.categories }
                            />
                          ))

     return renderedPosts;                     
  }*/

  /*renderPost( post ) {
    return (
      <Post
        title={ post.title }
        link={ post.link }
        key={ post.id }
        description={ post.description }
        vote={ post.votes }
        updateVote={ this.updateVote.bind( this, post )}
        categories={ post.categories }
      />
    )
  }*/

  render() {
    const postList = this.state.posts;

    return (
      <div className={ styles[ 'post-list' ] }>
        <PostToolbar 
          sortNewest={ this.sortNewest.bind( this, postList ) } 
          sortPopular={ this.sortPopular.bind( this, postList ) } 
        />
        <ul>
          { 
            postList.map(( e ) => ( 
              <Post
                title={ e.title }
                link={ e.link }
                key={ e.id }
                description={ e.description }
                vote={ e.votes }
                updateVote={ this.updateVote.bind( this, e )}
                categories={ e.categories }
              />
            ))

            /*this.renderPosts( postList )*/
            
            /*postList.map( this.renderPost )*/

          }
        </ul>
      </div>
    );
  };
}

export default PostList;