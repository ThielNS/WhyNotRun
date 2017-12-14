import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost";
import GameBug from "../GameBug";

class Feed extends Component {

  componentDidMount() {

    const { listPosts } = this.props;

    listPosts()
      .catch(error => (
        'Erro ao Listar as postagens!'
      ));
  }

  renderPosts(){
    
    const { posts } = this.props;

    return posts.map((post, index) => (
      <CardPost {...post} key={index} index={index}/>
    ));
  }
  
  render() {
    return (
      <div className="container">
        <GameBug/>
        { this.renderPosts() }
      </div>
    );
  }
}

Feed.propTypes = {
  listPosts: PropTypes.func.isRequired
};



export default Feed;