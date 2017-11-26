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
        {/*<CardPost*/}
          {/*UserName={'Gabriel Souza'}*/}
          {/*UserProfession={'Front-End'}*/}
          {/*UserPictures={'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}*/}
          {/*DateCreation={'2017-11-24T13:52:03-03:00'}*/}
          {/*Title={'Django é uma framework?'}*/}
          {/*Description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus malesuada leo eget euismod. In ut hendrerit est. Etiam ornare ipsum ipsum, vel ullamcorper lectus laoreet fringilla. Suspendisse non finibus arcu, non pellentesque dui. Duis neque nisl, hendrerit eu lectus sed, consectetur ornare magna. Nam ac magna pretium, vehicula metus at, convallis justo. Suspendisse dapibus quis libero in ultricies. Nulla dictum dui sem, ut euismod orci aliquet ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lectus erat, laoreet in nisi in, pulvinar tincidunt lectus.\n Aliquam erat volutpat. Etiam ultrices enim dolor, vitae tempor lacus sodales non. Ut semper ligula sit amet velit mollis facilisis. Mauris et mi nec felis lacinia pellentesque. Quisque tortor turpis, fermentum quis tortor posuere, aliquet ornare massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sed mauris libero. Nullam dictum est sed sapien fermentum, a pretium tortor maximus. Etiam ut urna urna.'}*/}
          {/*Techies={tags}*/}
          {/*Points={'-15348791'}*/}
          {/*Comments={comments}*/}
        {/*/>*/}
      </div>
    );
  }
}

Feed.propTypes = {
  listPosts: PropTypes.func.isRequired
};

export default Feed;