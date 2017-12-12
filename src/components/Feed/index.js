import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPost from "../CardPost";
import GameBug from "../GameBug";

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bugs: 0,
    };
  }

  componentDidMount() {

    const { listPosts, posts } = this.props;
    console.log(
    listPosts()
      .then(result => {
        console.log(result);
      })
      .catch(error => (
        'Erro ao Listar as postagens!'
      )) );

    this.setState({ bugs: posts.length });
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