import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost/index";

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props
      .listPosts()
      .catch( e => {
        console.log(e);
      });
  }

  renderPosts(){
    const { posts } = this.props;
    return posts.map((post, index) => (
      <CardPost {...post} key={index}/>
    ));
  }
  
  render() {

    return (
      <div className="container">
        { this.renderPosts() }
      </div>
    );
  }
}

Feed.propTypes = {
  listPosts: PropTypes.func.isRequired
};

export default Feed;