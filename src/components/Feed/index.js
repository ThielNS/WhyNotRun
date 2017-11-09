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

  render() {

    const { state } = this.props;

    return (
      <div className="container">
        {state.map((s, i) => (
          <CardPost {...s} key={i}/>
        ))}
      </div>
    );
  }
}

export default Feed;