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


  render() {
    return (
      <div className="container">
        <CardPost tags={this.state.tags}/>
      </div>
    );
  }
}

export default Feed;