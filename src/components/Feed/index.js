import React, { Component } from 'react';
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
    this.props.getAPI();
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

export default Feed;