import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost";
import GameBug from "../GameBug/index";

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bugs: 0,
    };
  }

  componentDidMount() {
    this.props
      .listPosts()
      .catch( e => {
        console.log(e);
      });

    this.setState({ bugs: this.props.posts.length });
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
        <GameBug lengthBugs={this.state.bugs}/>
        { this.renderPosts() }
      </div>
    );
  }
}

Feed.propTypes = {
  listPosts: PropTypes.func.isRequired
};

export default Feed;