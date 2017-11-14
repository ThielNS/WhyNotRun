import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost/index";

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { title: 'React JS' },
        { title: 'Angular JS' },
        { title: 'Vue JS' },
      ],
    };
  }

  componentDidMount() {
    this.props.listPosts();
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