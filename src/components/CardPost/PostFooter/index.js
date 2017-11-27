import React, { Component } from 'react';
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import AddComment from "./AddComment";

class PostFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddComment: false,
    };
  }

  changeAddComment = () => {
    this.setState({ showAddComment: !this.state.showAddComment});
  };

  componentDidUpdate() {

    const addComment = document.getElementById(`input-${this.props.idPost}`);

    if(this.state.showAddComment) {
      addComment.classList.add('-show');
      addComment.lastElementChild.lastElementChild.focus();
    } else {
      addComment.classList.remove('-show');
    }
  }

  render() {

    const { idPost, reactions, comments } = this.props;
    const { showAddComment } = this.state;

    const classAddComment = showAddComment ? '-show' : '';

    return (
      <footer className="post-footer">
        <PostReact reactions={reactions} changeAddComment={this.changeAddComment.bind(this)}/>
        <PostComments comments={comments}/>
        <AddComment id={`input-${idPost}`} className={classAddComment}/>
      </footer>
    );
  };
}

export default PostFooter;

